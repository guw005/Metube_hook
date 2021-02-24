import { connect } from 'react-redux';
import { createVideo } from './../../actions/video_actions';
import { clearErrors } from './../../actions/error_actions';
import { hideModal } from './../../actions/modal_actions';
import VideoForm from './video_form';

const mSP = state => ({
    // currentUserId: state.session.id,
    video: {
        title: "",
        description: "",
        thumbnailFile: null,
        thumbnailUrl:  null,
        videoFile: null,
        videoUrl: null
    },
    formType: 'Upload video',
    errors: state.errors.video
});

const mDP = dispatch => ({
    createVideo: (video) => dispatch(createVideo(video)),
    clearErrors: () => dispatch(clearErrors()),
    hideModal: () => dispatch(hideModal())
})

export default connect(mSP, mDP)(VideoForm);