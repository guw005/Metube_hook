import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from './../actions/video_actions';
import { RECEIVE_LIKE } from "../actions/like_actions";
import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';



const videosReducer = (state={}, action) => {
    Object.freeze(state);
    // const nextState = Object.assign({}, state)
    let nextState, video;

    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            // nextState = action.payload.videos
            return Object.assign({}, state, action.payload.videos);
        case RECEIVE_VIDEO:
            // nextState[action.payload.video.id] = action.payload.video
            return Object.assign({}, state, {[action.payload.video.id]: action.payload.video});
        case REMOVE_VIDEO:
            nextState = Object.assign({}, state);
            delete nextState[action.videoId]
            return nextState;
        case RECEIVE_LIKE:
            video = action.payload.video;
            if (!video) return state;
            return Object.assign({}, state, {[video.id]: video});
        case RECEIVE_ALL_COMMENTS:
            video = action.payload.video;
            if (!video) return state;
            return Object.assign({}, state, {[video.id]: video});
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {[action.payload.video.id]: action.payload.video});
        case REMOVE_COMMENT:
            return Object.assign({}, state, {[action.payload.video.id]: action.payload.video});
        default:
            return state;
    }
};

export default videosReducer;