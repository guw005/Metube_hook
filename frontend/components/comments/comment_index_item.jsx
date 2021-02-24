import React from 'react';
import { withRouter } from 'react-router-dom';
import { uploadTime } from '../../util/date_util';
import EditCommentForm from '../comments/edit_comment_form_container';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditForm: false
        };

        this.createLike = this.createLike.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.hideEditForm = this.hideEditForm.bind(this);
    }

    createLike(is_like) {
        const like = {
            is_like,
            likable_id: this.props.comment.id,
            likable_type: "Comment"
        };
        this.props.createCommentLike(like);
    }

    handleLike(e, is_like) {
        e.preventDefault();
        if(!this.props.currentUser) {
            return null;
        }

        if(this.props.comment.like) {
            if(is_like !== this.props.comment.like.is_like) {
                this.props.deleteCommentLike(this.props.comment.id).then(() => this.createLike(is_like));
            } else {
                this.props.deleteCommentLike(this.props.comment.id);
            }
        } else {
            this.createLike(is_like);
        }
    }

    _styleLike(is_like) {
        if(!this.props.currentUser) return "";
        if(this.props.comment.like) {
            if (this.props.comment.like.is_like === is_like) {
                return "-blue";
            }
        }
        return "";
    }

    deleteComment(e) {
        e.preventDefault();
        if (this.props.currentUser !== this.props.comment.user_id) return null;
        this.props.removeComment(this.props.comment.id);
    }

    hideEditForm() {
        this.setState({ showEditForm: false });
    }

    render() {
        return (
            <div className="comment-section">
                <div className="comment-author-pic-container">
                    <img className="comment-author-pic" src={this.props.user.image_url} />
                </div>

            {!this.state.showEditForm ? (
                <div className="comment-like-container">
                    <div>
                        <div className="comment-index">
                            <div>
                                <span className="comment-author-name">{this.props.user.username}</span>
                                <span className="comment-time">{uploadTime(this.props.comment.created_at)} ago</span>
                            </div>

                            {this.props.currentUser === this.props.comment.user_id ? (
                                <div className="edit-delete-container">
                                    <div
                                    className="comment-edit-pic-container"
                                    onClick={() => this.setState({ showEditForm: true })}>
                                        <img 
                                        className="comment-edit-pic"
                                        src={window.commentEdit}/>
                                    </div>

                                    <div
                                    className="comment-delete-pic-container"
                                    onClick={this.deleteComment}>
                                        <img 
                                        className="comment-delete-pic"
                                        src={window.commentDelete}/>
                                    </div>
                                </div>
                            ) : (null)}

                        </div>
                        <span className="comment-body">{this.props.comment.body}</span>
                    </div>

                    <div className="like-buttons">
                        <div
                            className={`like-button${this._styleLike(true)}`}
                            onClick={(e) => this.handleLike(e, true)}
                        >
                            <div className="like-button-container">
                                <img 
                                className="like-button-pic"
                                src={window.likeButton}/>
                            </div>
                            <span>{this.props.comment.like_counts.true ? this.props.comment.like_counts.true : 0}</span>
                        </div>

                        <div
                            className={`dislike-button${this._styleLike(false)}`}
                            onClick={(e) => this.handleLike(e, false)}
                        >
                            <div className="dislike-button-container">
                                <img 
                                className="dislike-button-pic"
                                src={window.dislikeButton}/>
                            </div>
                            <span>{this.props.comment.like_counts.false ? this.props.comment.like_counts.false : 0}</span>
                        </div>
                    </div>
                </div>
            ):(
                <EditCommentForm
                comment={this.props.comment}
                hideEditForm={this.hideEditForm}
                />
            )}
            </div>
        )
    }
}

export default withRouter(CommentIndexItem);