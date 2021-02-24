import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchAllVideos } from './../../actions/video_actions';

const mSP = state => ({
    videos: Object.values(state.entities.videos),
    users: state.entities.users
});

const mDP = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos())
});

export default connect(mSP, mDP)(VideoIndex);