import React from 'react';
import CommentIndexItem from './comment_index_item';
import { withRouter } from 'react-router-dom';
import CommentForm from './create_comment_form_container';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchAllComments(this.props.match.params.videoId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.videoId !== prevProps.match.params.videoId){
            this.props.fetchAllComments(this.props.match.params.videoId);
        }
    }

    render(){
        return (
            <section>
                <section className="comment-count-container">
                    <span className="comment-count">{this.props.videos[this.props.match.params.videoId].comment_count} Comments</span>
                </section>
                {this.props.currentUser ? (
                    <CommentForm
                        video={this.props.video} />
                ) : <span className="signin-alert">Please Sign In before you leave a comment</span>}
                    

                <section>
                    {this.props.comments.map(comment => (
                        <CommentIndexItem
                        key={comment.id}
                        comment={comment}
                        user={this.props.users[comment.user_id]}
                        currentUser={this.props.currentUser}
                        createCommentLike={this.props.createCommentLike}
                        deleteCommentLike={this.props.deleteCommentLike}
                        removeComment={this.props.removeComment}
                        />
                    ))}
                </section>
            </section>
        )
    }
}

export default withRouter(CommentIndex);