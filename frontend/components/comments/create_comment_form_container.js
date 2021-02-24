import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    return {
        comment: {
            body: '',
            video_id: ownProps.video.id,
            // showCreateButton: false
        },
        users: state.entities.users,
        currentUser: state.session.id,
        formType: "Create Comment",
        errors: state.errors.comment,
        // video: ownProps.video
    };
};

const mdp = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
});

export default connect(msp, mdp)(CommentForm);