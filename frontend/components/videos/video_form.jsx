import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.video;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillUnmount() {
      this.props.clearErrors();
    }

    update(type){
        return e => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleFile(e, typeFile, typeUrl){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ [typeFile]: file, [typeUrl]: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e){
        e.preventDefault;

        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        if(this.state.thumbnailFile){
          formData.append('video[thumbnail]', this.state.thumbnailFile);
        }
        if(this.state.videoFile){
          formData.append('video[video_file]', this.state.videoFile);
        }

        if(this.props.formType === 'Upload video'){
          this.props.createVideo(formData).then(resp => {
            this.props.hideModal();
            document.getElementById("modal-container-hidden").style.display = "none";
            this.props.history.push(`/videos/${resp.payload.video.id}`);
          });
        } else if (this.props.formType === 'Edit video') {
          this.props.updateVideo(formData, this.props.video.id).then(() => {
            this.props.hideModal();
            document.getElementById("modal-container-hidden").style.display = "none";
          })
        }
        
    
    }

    _videoInput(){
      const videoFileError = this._displayError('video file');
      const videoPreview = this.state.videoUrl ? (
        <video
          className="preview-video"
          controls="controls"
          key={this.state.videoUrl}
          autoPlay
        >
          <source src={this.state.videoUrl} type="video/mp4" />
        </video>
      ) : null;
      const display = this.props.formType === "Upload video" ? (
        <label className="custom-video-upload">
          <input
              type="file"
              onChange={e => this.handleFile(e, "videoFile", "videoUrl")}
          />
          {videoPreview}
          <img className={`upload-icon ${videoFileError ? "error-video-file-style" : null}`} src={window.uploadPic} />
          <span className="custom-video-text-1">Drag and drop a file you want to upload</span>
          <span className="custom-video-text-2">Your video will be private until you publish it</span>
          <div className="select-file-button-container">
            <span className="select-file-button-text">SELECT FILE</span>
          </div>

          {videoFileError && (
          <div className="error-message-container">
            <img className="error-icon" src={window.errorIcon} />
            <span>
              {videoFileError}
            </span>
          </div>
          )}

        </label>
      ) : null;

      return(
        <>
          {display}
        </>
      )
    }

    handleDelete(e){
      e.preventDefault();

      this.props.deleteVideo(this.props.video.id).then(()=>{
            this.props.hideModal();
            document.getElementById("modal-container-hidden").style.display =
              "none";
            this.props.history.push(`/`);
      })
    }

    showConfirm(){
      const confirmContainer = document.getElementById("confirm-container");
      confirmContainer.style.display = "flex";
    }

    hideConfirm(){
      const confirmContainer = document.getElementById("confirm-container");
      confirmContainer.style.display = "none";
    }

    _deleteButton(){
      const display = this.props.formType === "Edit video" ? (
        <div className="delete-section">
          <div 
          className="delete-button-container"
          onClick={this.showConfirm}>
            <span className="delete-button-text">DELETE VIDEO</span>

          </div>

          <div id="confirm-container">
            <p className="confirm-message">Delete forever?</p>
            <div className="confirm-button-container">
              <div 
                className="confirm-button-blue"
                onClick={this.hideConfirm}>
                <span>CANCEL</span>
              </div>
              <div
                className="confirm-button-red"
                onClick={this.handleDelete}
              >
                <span>YES</span>
              </div>
            </div>
          </div>
        </div>


      ) : null;

      return(
        <>
          {display}
        </>
      )
    }

    _displayError(field){
      const errors = this.props.errors;
      return errors.find(error => error.toLowerCase().includes(field));
    }

    render(){
        const preview = this.state.thumbnailUrl ? <img className="preview-image" src={this.state.thumbnailUrl} /> : null;
        const titleError = this._displayError('title');
        const thumbnailError = this._displayError('thumbnail');
        
        return (
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="form-top-section">
              <span className="form-top-section-text">
                {this.props.formType}
              </span>
              <div className="form-top-section-close">
                <span
                  onClick={() => {
                    this.props.hideModal();
                    document.getElementById(
                      "modal-container-hidden"
                    ).style.display = "none";
                  }}
                >
                  X
                </span>
              </div>
            </div>

            <div className="inputs-container">
              <div className="detail-container">
                <span className="detail-text">Details</span>
              </div>

              <div className="input-inner">
                <div className="title-des-thumb">
                  <div className={`title-input ${titleError ? "error-style" : null}`}>
                    <label>
                      <div className="inner-title-input">
                        <span className="title-text">Title (required)</span>
                        <input
                          className="title-type"
                          type="text"
                          value={this.state.title}
                          onChange={this.update("title")}
                          placeholder="Add a title that describes your video"
                        />
                        <div className="word-count-container">
                          <span className="word-count">{`${this.state.title.length} / 100`}</span>
                        </div>
                      </div>

                        {titleError && (
                        <div className="error-message-container">
                          <img className="error-icon" src={window.errorIcon}/>
                          <span>{titleError}</span>
                        </div>
                        )}

                    </label>
                  </div>

                  <div className="desc-input">
                    <label>
                      <div className="inner-desc-input">
                        <span className="desc-text">Description</span>
                        <textarea
                          className="desc-type"
                          value={this.state.description}
                          onChange={this.update("description")}
                          placeholder="Tell viewers about your video"
                        />
                        <div className="word-count-container">
                          <span className="word-count">{`${this.state.description.length} / 5000`}</span>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="thumbnail-container">
                    <h3 className="thumbnail-title">Thumbnail</h3>

                    <p className="thumbnail-text">
                      Select or upload a picture that shows what's in your
                      video. A good thumbnail stands out and draws viewers'
                      attention.
                    </p>

                    <div className="thumbnail-upload">
                      <label className={`custom-file-upload ${thumbnailError ? "error-style" : null}`}>
                        <input
                          type="file"
                          onChange={e =>
                            this.handleFile(e, "thumbnailFile", "thumbnailUrl")
                          }
                        />
                          <img className="photo-icon" src={window.photoPic}/>
                          <span className="upload-text">Upload thumbnail</span>
                        
                      </label>

                      {thumbnailError && (
                      <div className="error-message-container">
                        <img className="error-icon" src={window.errorIcon} />
                        <span>{thumbnailError}</span>
                      </div>
                      )}


                      {preview}
                    </div>
                  </div>
                </div>

                <div className="video-delete">
                  {this._videoInput()}
                  {this._deleteButton()}
                </div>
              </div>
            </div>

            <div className="form-submit-container">
              <input className="form-submit" type="submit" value="DONE" />
            </div>
          </form>
        );
    }
}

 export default withRouter(VideoForm);