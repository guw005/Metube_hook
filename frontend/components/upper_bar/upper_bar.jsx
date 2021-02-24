import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class upperBar extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        search: ''
      };
      this.handleShowModal = this.handleShowModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
      return e => {
        this.setState({ [field]: e.currentTarget.value });
      };
    }

    handleSubmit(e) {
      e.preventDefault();
      const search_query = this.state.search.split(" ").join("+");
      this.props.history.push(`/results?search_query=${search_query}`);
    }

    handleShowModal() {
        if(this.props.currentUser){
            return (
              <div
                id="upload-pic"
                className="upload-pic-container"
                onClick={
                    () => {
                        this.props.showModal({ type: "uploadVideo" });
                        document.getElementById('modal-container-hidden').style.display = "block";
                    }
                }
              >
                <img className="upload-pic" src={window.videoUploadPic}/>
              </div>
            );
        } else {
            
            return (
              <section
                id="upload-pic-container-signin"
                className="upload-pic-container-signin"
              >
                <img className="upload-pic-signin" src={window.videoUploadPic} />
              </section>
            );
        }
    }

    render() {
        return (
          <div className="upper-bar">
            <div className="hamburger-pic-container">
              <img className="hamburger-pic" src={window.hamburgerPic} />
            </div>
            <div
              className="youtube-pic-container"
              onClick={() => this.props.history.push("/")}
            >
              <img className="youtube-pic" src={window.youtubePic} />
            </div>
            <div className="search-bar">
              <form className="search-input" onSubmit={this.handleSubmit}>
                <input 
                  type="text"
                  placeholder="Search"
                  value={this.state.search}
                  onChange={this.update('search')}
                />
                <button
                  className="search-button"
                  type="submit">
                    <img 
                    className="search-icon"
                    src={window.searchIcon}/>
                  </button>
              </form>
            </div>
            <>{this.handleShowModal()}</>
          </div>
        );

    }
}

export default withRouter(upperBar);