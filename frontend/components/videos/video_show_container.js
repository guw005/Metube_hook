import { connect } from "react-redux";
import VideoShow from "./video_show";
import { fetchVideo, fetchAllVideos } from "./../../actions/video_actions";
import { showModal } from "../../actions/modal_actions";
// import { fetchAllComments, createComment, deleteComment, updateComment } from '../../actions/comment_actions';
// import { createCommentLike, deleteCommentLike } from '../../actions/like_actions';

const mSP = (state, ownProps) => {
    return({
    video: state.entities.videos[ownProps.match.params.videoId],
    relatedVideos: Object.values(state.entities.relatedVideos),
    users: state.entities.users,
    currentUser: state.session.id,
    // comments: Object.values(state.entities.comments)
    })
};

const mDP = dispatch => ({
    showModal: (modal) => dispatch(showModal(modal)),
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    fetchAllVideos: () => dispatch(fetchAllVideos),
    // fetchAllComments: (videoId) => dispatch(fetchAllComments(videoId)),
    // createCommentLike: (like) => dispatch(createCommentLike(like)),
    // deleteCommentLike: (commentId) => dispatch(deleteCommentLike(commentId)),
    // removeComment: (commentId) => dispatch(deleteComment(commentId))
})

export default connect(mSP, mDP)(VideoShow);