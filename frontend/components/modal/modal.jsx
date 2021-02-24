import React from 'react';
import UploadVideoContainer from './../videos/create_video_form_container';
import UpdateVideoContainer from './../videos/update_video_form_container';
import { NavLink } from 'react-router-dom';

class Modal extends React.Component{

    // componentDidUpdate(){
    //     if(this.props.modal.type){
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "unset";
    //     }
    // }

    // handleForm(){
    //     if(this.props.modal.type === 'uploadVideo'){
    //         return(
    //             <UploadVideoContainer />
    //         )
    //     } else if(this.props.modal.type === 'editVideo'){
    //         return (
    //           <div>
    //             <button onClick={() => this.props.hideModal()}>x</button>
    //             <span>{this.props.modal.type}</span>
    //           </div>
    //         );
    //     }
    // }

    render(){
        // if(this.props.modal.length === 0){display = null};

        let display;
        if(this.props.modal.type === 'uploadVideo'){
            display = <UploadVideoContainer />
        } else {
            display = <UpdateVideoContainer />
        }
        return (
          <div id="modal-container-hidden">
            {display}
          </div>
        );
    }
}

export default Modal;