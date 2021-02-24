import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";

const receiveLike = payload => ({
    type: RECEIVE_LIKE,
    payload
});

export const createVideoLike = like => dispatch => {
    return LikeAPIUtil.createVideoLike(like)
        .then(payload => dispatch(receiveLike(payload)));
};

export const deleteVideoLike = videoId => dispatch => {
    return LikeAPIUtil.deleteCommentLike(videoId)
        .then(payload => dispatch(receiveLike(payload)));
};

export const createCommentLike = like => dispatch => {
    return LikeAPIUtil.createCommentLike(like)
        .then(payload => dispatch(receiveLike(payload)));
};

export const deleteCommentLike = commentId => dispatch => {
    return LikeAPIUtil.deleteCommentLike(commentId)
        .then(payload => dispatch(receiveLike(payload)));
};