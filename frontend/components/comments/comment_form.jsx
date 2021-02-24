import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showButtons = this.showButtons.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;

        if(this.props.formType === 'Create Comment'){
            this.props.createComment(this.state)
            .then(() => {
                this.setState({body:''});
            })
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    showButtons() {
        document.getElementById("comment-input-buttons").style.display = "flex";
    }

    hideForm() {
        document.getElementById("comment-input-buttons").style.display ="none";
    }

    render() {
        return (
            <div className="create-comment-container">
                <div className="create-comment-pic-container">
                    {this.props.currentUser ? (
                        <img className="create-comment-pic" src={this.props.users[this.props.currentUser].image_url}/>
                    ) : null}
                </div>

                <div className="comment-body-input-container">
                    <form className="comment-body-input" onSubmit={this.handleSubmit}>
                        <input 
                            className="comment-body-textarea"
                            placeholder="Add a public comment..."
                            onChange={this.update('body')}
                            value={this.state.body}
                            onClick={this.showButtons}
                        />
                
                    <div id="comment-input-buttons">
                        <div 
                            className="comment-cancel-button"
                            onClick={this.hideForm}
                            >
                            <span>CANCEL</span>
                        </div>

                        <div className="comment-submit-button">
                            <input type="submit" value="COMMENT" />
                        </div>
                    </div>

                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter(CommentForm);