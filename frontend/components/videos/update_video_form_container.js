import React from 'react';
import { connect } from 'react-redux';
import { updateVideo, deleteVideo } from './../../actions/video_actions';
import { clearErrors } from './../../actions/error_actions';
import { hideModal } from './../../actions/modal_actions';
import VideoForm from './video_form';

class EditVideoForm extends React.Component{

    render(){
        const { video, formType, updateVideo, deleteVideo, clearErrors, hideModal, errors } = this.props;

        if(!video) return null
        return(
            <VideoForm
                video={video}
                formType={formType}
                updateVideo={updateVideo}
                deleteVideo={deleteVideo}
                clearErrors={clearErrors}
                hideModal={hideModal}
                errors={errors}
            />
        )
    }
}

const mSP = state => ({
  formType: "Edit video",
  errors: state.errors.video,
  video: state.entities.videos[state.ui.modal.videoId]
})

const mDP = dispatch => ({
    updateVideo: (video, id) => dispatch(updateVideo(video, id)),
    deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
    clearErrors: () => dispatch(clearErrors()),
    hideModal: () => dispatch(hideModal())
})

export default connect(mSP, mDP)(EditVideoForm);