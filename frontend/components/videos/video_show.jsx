import React from 'react';

import VideoShowItem from './video_show_item';
// import RelatedVideos from './related_videos';
// import RelatedVideoItem from './related_video_item';
import VideoIndexItem from './video_index_item';
// import VideoIndex from './video_index';
// import CommentIndex from '../comments/comment_index_container';



class VideoShow extends React.Component{

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId);
        window.scrollTo(0, 0);
        // this.props.fetchAllComments(this.props.match.params.videoId);
    }

    componentDidUpdate(prevProps){
      if(this.props.match.params.videoId != prevProps.match.params.videoId){
        this.props.fetchVideo(this.props.match.params.videoId);
        // this.props.fetchAllComments(this.props.match.params.videoId);
      }
    }

    // _editButton(){
    //   const display = this.props.currentUser === this.props.video.author_id ? (
    //     <div onClick={() => {
    //       this.props.showModal({type:'editVideo'});
    //       document.getElementById('modal-container-hidden').style.display="block";
    //       }}>
    //       <span>EDIT VIDEO</span>
    //     </div>
    //   ) : null;
        
    //   return(
    //     <>
    //       {display}
    //     </>
    //   )
    // }

    render(){

        const {video, users, relatedVideos, history, currentUser, showModal, comments} = this.props
        if(!video) return null;

        return (
          <div className="outer-video-show">
            <VideoShowItem
              video={video}
              users={users}
              currentUser={currentUser}
              showModal={showModal}
              comments={comments}
            />
            
            <div className="related-video-index">
              <div className="up-next-container">
                <span className="up-next">Up next</span>
              </div>
              {relatedVideos.map(video => (
                <VideoIndexItem
                  key={video.id}
                  video={video}
                  user={users[video.author_id]}
                  history={history}
                  type="relatedIndex"
                />
              ))}
            </div>
          </div>
        );
    }
};

export default VideoShow;