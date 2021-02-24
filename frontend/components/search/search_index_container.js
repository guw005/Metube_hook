import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { fetchSearchVideos } from '../../actions/search_actions';

const msp = state => {
    let videos = state.entities.searchVideos;
    if(!videos) {
        videos=[];
    } else {
        videos = Object.values(videos);
    }
    return {
        videos: videos,
        users: state.entities.users,
        sidebar: state.ui.sidebar
    };
};

const mdp = dispatch => {
    return {
        fetchSearchVideos: search_query => dispatch(fetchSearchVideos(search_query))
    };
};

export default connect(msp, mdp)(SearchIndex);