import React from 'react';
import VideoIndexItem from './video_index_item';
import { withRouter } from 'react-router-dom'

class VideoIndex extends React.Component{

    componentDidMount(){
        this.props.fetchAllVideos();
    }

    render(){
        return (
          <div className="index-page">
            <section className="nav-bar">
              <div className="icon-container" >
                <img className="icon-pic" src={window.homePic} />
                <span className="icon-text home-icon">Home</span>
              </div>
              <div
                className="icon-container"
                onClick={() =>
                  (window.location =
                    "https://github.com/guw005/Full-Stack-Project")
                }
              >
                <img className="icon-pic" src={window.githubPic} />
                <span className="icon-text">github</span>
              </div>
            </section>
            <section className="video-index">
              <h1 className="recommended-tag">Recommended</h1>
              <section className="recommended-video-index">
                {this.props.videos.map(video => (
                  <VideoIndexItem
                    video={video}
                    user={this.props.users[video.author_id]}
                    history={this.props.history}
                    key={video.id}
                    type="indexPage"
                  />
                ))}
              </section>
            </section>
          </div>
        );
    }
};

export default withRouter(VideoIndex);