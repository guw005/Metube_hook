import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO } from "../actions/video_actions";
import { RECEIVE_ALL_COMMENTS } from '../actions/comment_actions'
import { RECEIVE_SEARCH_VIDEOS } from "../actions/search_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    // const nextState = Object.assign({}, state);
    // let nextState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // nextState[action.currentUser.id] = action.currentUser;
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        case RECEIVE_ALL_VIDEOS:
            return Object.assign({}, state, action.payload.users);
        case RECEIVE_VIDEO:
            let users = action.payload.users;
            let user = action.payload.user;
            let nextState = Object.assign({}, state, users);
            nextState[action.payload.user.id] = action.payload.user;
            return nextState;
        case RECEIVE_ALL_COMMENTS:
            return Object.assign({}, state, action.payload.users);
        case RECEIVE_SEARCH_VIDEOS:
            return Object.assign({}, state, action.payload.users);
        default:
            return state;
    }
};

export default usersReducer;