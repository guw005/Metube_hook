import { connect } from 'react-redux';
import Modal from './modal';
import { hideModal } from './../../actions/modal_actions';

const mSP = state => ({
    modal: state.ui.modal,
    currentUser: state.entities.users[state.session.id]
});

const mDP = dispatch => ({
    hideModal: () => dispatch(hideModal())
});

export default connect(mSP, mDP)(Modal)