import UserSidebar from "./user_sidebar";
import { connect } from "react-redux";
import { logout } from './../../actions/session_actions'

const mSP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSP, mDP)(UserSidebar);