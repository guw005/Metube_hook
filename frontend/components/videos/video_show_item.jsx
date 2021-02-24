import React from 'react';
import { date } from "./../../util/date_util";
import CommentIndex from '../comments/comment_index_container';

const VideoShowItem = ({video, users, currentUser, showModal}) => {

    const _editButton = () => {
              const display =
                currentUser === video.author_id ? (
                  <div className="edit-video-button"
                    onClick={() => {
                      showModal({ type: "editVideo", videoId: `${video.id}` });
                      document.getElementById(
                        "modal-container-hidden"
                      ).style.display = "block";
                    }}
                  >
                    <span className="edit-video-text">EDIT VIDEO</span>
                  </div>
                ) : null;

              return <>{display}</>;
    }

    return (
      <div className="video-show">
        <video
          className="video-show-video"
          controls="controls"
          key={video.video_url}
          autoPlay
        >
          <source src={video.video_url} type="video/mp4" />
        </video>
        <section className="video-show-video-info">
          <span className="video-show-title">{video.title}</span>
          <span className="video-show-views-and-time">
            {`${video.view_counts} views \u2022 ${date(video.created_at)}`}
          </span>
        </section>
        <section className="video-show-author">
          <img
            className="video-show-author-pic"
            src={users[video.author_id].image_url}
          />
          <section className="video-show-author-and-description">
            <section className="video-show-author-edit">
              <span className="video-show-author-username">
                {users[video.author_id].username}
              </span>
              <section>
                  {_editButton()}
              </section>
            </section>
            <p className="video-show-video-description">{video.description}</p>
          </section>
        </section>

        <section>
          <CommentIndex
            // comments={comments}
            video={video}
          />
        </section>
      </div>
    );
}

export default VideoShowItem;