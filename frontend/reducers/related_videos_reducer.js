import { RECEIVE_VIDEO } from "./../actions/video_actions";

const relatedVideosReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_VIDEO:
            return action.payload.videos;
        default:
            return state;
    }
};

export default relatedVideosReducer;