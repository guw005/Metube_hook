import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import videoReducer from "./videos_reducer";
import relatedVideosReducer from "./related_videos_reducer";
import commentsReducer from "./comments_reducer";
import searchVideosReducer from "./search_videos_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videoReducer,
    relatedVideos: relatedVideosReducer,
    comments: commentsReducer,
    searchVideos: searchVideosReducer
});

export default entitiesReducer;