import React from 'react';
import GoogleSignInContainer from "./../session_form/google_signin_container";


const UserSidebar = ({ currentUser, logout }) => {
    const handleProfileClick = () => {
        document.getElementById('dropdown').classList.toggle('show');
    };

    window.onclick = function (e) {
        if (!e.target.matches('.user-profile-button')) {
            const dropDowns = document.getElementsByClassName('user-sidebar-profile');
            for (let i = 0; i < dropDowns.length; i++) {
                const openDropdown = dropDowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };

    const personalInfo = () => (
      <>
        <div id="dropdown" className="user-sidebar-profile">
          <section className="user-sidebar-profile-info">
            <img
              className="user-sidebar-profile-info-image"
              src={currentUser.image_url}
            />
            <section className="user-sidebar-profile-info-text">
              <h2 className="user-sidebar-profile-info-name">
                {currentUser.username}
              </h2>
              <h2 className="user-sidebar-profile-info-email">
                {currentUser.email}
              </h2>
            </section>
          </section>
          <section className="user-sidebar-function">
            <section className="user-sidebar-function-signout" onClick={logout}>
              <img
                className="user-sidebar-signout-image"
                src={window.signoutPic}
              />
              <h2 className="user-sidebar-signout-text">Sign out</h2>
            </section>
          </section>
        </div>
        <img
          className="user-profile-button"
          onClick={() => handleProfileClick()}
          src={currentUser.image_url}
        />
      </>
    );

    return currentUser ? personalInfo() : <GoogleSignInContainer />;
};

export default UserSidebar;