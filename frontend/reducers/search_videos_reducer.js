import { RECEIVE_SEARCH_VIDEOS } from "./../actions/search_actions";

const searchVideosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_VIDEOS:
            let videos = action.payload.videos;
            if(!videos) return null;
            return videos;
        default:
            return state;
    }
};

export default searchVideosReducer;