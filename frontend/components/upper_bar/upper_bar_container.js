import { connect } from 'react-redux';
import upperBar from './upper_bar';
import { showModal } from './../../actions/modal_actions';

const mSP = state => ({
    currentUser: state.entities.users[state.session.id],
    modal: state.ui.modal
});

const mDP = dispatch => ({
    showModal: modal => dispatch(showModal(modal))
});

export default connect(mSP, mDP)(upperBar);