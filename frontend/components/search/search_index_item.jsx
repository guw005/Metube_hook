import React from 'react';
import { uploadTime } from '../../util/date_util';

const SearchIndexItem = ({ video, user, history }) => {
    return (
        <div 
            className="search-index-video-container"
            onClick={() => history.push(`/videos/${video.id}`)}
            >
            <div>
                <img 
                className="search-index-video-thumbnail"
                src={video.thumbnail}/>
            </div>

            <div className="search-video-info-container">
                <div className="search-video-title">
                    <span>{video.title}</span>
                </div>

                <div className="search-video-info">
                    <span>{user.username}</span>
                    <span>{video.view_count} views</span>
                    <span> {"\u2022"} </span>
                    <span>{uploadTime(video.created_at)} ago</span>
                </div>

                <div className="search-video-description">
                    <span>{video.description}</span>
                </div>
            </div>
        </div>
    );
};

export default SearchIndexItem;