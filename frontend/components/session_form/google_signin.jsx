// GOOGLE SIGN IN HELPED BY YINQIAN!!!!!
import React from 'react';

class GoogleSignIn extends React.Component{
    constructor(props){
        super(props);
        this.onSuccess = this.onSuccess.bind(this);
        // this.EventHandler = this.EventHandler.bind(this);
        // this.attachSignin = this.attachSignin.bind(this);
    }
    componentDidMount(){
        const intervalId = setInterval(() => {
            if (gapi) {
                this.renderButton();
                clearInterval(intervalId);
                const signin = document.getElementById("my-signin2");
                const upload = document.getElementById(
                  "upload-pic-container-signin"
                );
                    
                upload.addEventListener("click", () => {
                        signin.children[0].click();
                });
            }
        }, 100)
    }

    onSuccess(googleUser) {
        this.props.processForm(googleUser.getAuthResponse().id_token);
    }

    demoUserLogin() {
        this.props.demoUserLogin({ email: 'demouser@gmail.com', password: 'password'});

    } 


    renderButton() {
        gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 105.3,
            'height': 40,
            'longtitle': false,
            'theme': 'light',
            'onsuccess': this.onSuccess,
        });
    }

    render(){
        return (
            <div className= "nav-upper">
                <div className = "cover-image">
                    <img src={window.signinPic} className = "cover-image-profile-icon"/>
                    <span className = "cover-image-text">SIGN IN</span>
                </div>
                <div className="demo-login-dropdown">
                    <div className="demo-login" onClick={() => this.demoUserLogin()} >
                        <span className="demo-login-text">DEMO LOGIN</span>
                    </div>
                    <div className = "google-signin-button" id='my-signin2'></div>
                </div>
            </div>
        )
    }
}

export default GoogleSignIn
