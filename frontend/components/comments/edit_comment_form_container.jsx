import { connect } from 'react-redux';
import CommentForm from './comment_form';
import React from 'react';
import { updateComment, deleteComment } from '../../actions/comment_actions';

class EditCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.showButtons = this.showButtons.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;

        if (this.props.formType === 'Update Comment') {
            this.props.updateComment(this.state)
                .then(() => {
                    this.setState({ body: '' });
                    this.props.hideEditForm();
                });
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    // showButtons() {
    //     document.getElementById("comment-input-buttons").style.display = "flex";
    // }

    hideForm() {
        this.props.hideEditForm();
    }
    render() {
        return (
            <div className="edit-comment-container">
                <div className="comment-body-input-container">
                    <form className="comment-body-input" onSubmit={this.handleSubmit}>
                        <input
                            className="comment-body-textarea"
                            placeholder="Add a public comment..."
                            onChange={this.update('body')}
                            value={this.state.body}
                            // onClick={this.showButtons}
                        />

                        <div id="edit-comment-input-buttons">
                            <div
                                className="comment-cancel-button"
                                onClick={this.hideForm}
                            >
                                <span>CANCEL</span>
                            </div>

                            <div className="edit-comment-submit-button">
                                <input type="submit" value="SAVE" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        comment: state.entities.comments[ownProps.comment.id],
        currentUser: state.session.id,
        formType: "Update Comment",
        errors: state.errors.comment
    };
};

const mdp = dispatch => {
    return {
        updateComment: comment => dispatch(updateComment(comment)),
        // deleteComment: commentId => dispatch(deleteComment(commentId))
    };
};

export default connect(msp, mdp)(EditCommentForm);
