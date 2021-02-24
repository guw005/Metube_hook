import * as APIUtil from './../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const receiveUser = userId => dispatch => {
    return APIUtil.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const signup = user => dispatch => {
    return APIUtil.signup(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON)))
    )
};

export const login = user => dispatch => {
  return APIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const logout = () => dispatch => {
    return APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
};

export const googlelogin = (idToken) => dispatch => {
    return APIUtil.googleLogin(idToken).then(
        user => {
            dispatch(receiveCurrentUser(user));
            const auth2 = gapi.auth2.getAuthInstance();
            if (auth2 != null) {
                auth2.signOut().then(auth2.disconnect());
            }
        }
    )
}