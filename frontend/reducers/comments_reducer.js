import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

import { RECEIVE_LIKE } from "../actions/like_actions";

const commentsReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_COMMENTS:
            let comments = action.payload.comments;
            if (!comments) return {};
            return comments;
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {[action.payload.comment.id]: action.payload.comment});
        case RECEIVE_LIKE:
            let comment = action.payload.comment;
            if (!comment) return state;
            return Object.assign({}, state, {[comment.id]: comment});
        case REMOVE_COMMENT:
            let nextState = Object.assign({}, state);
            delete nextState[action.payload.comment.id];
            return nextState;
        default:
            return state;
    }
};

export default commentsReducer;