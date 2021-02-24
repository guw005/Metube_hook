json.comment do
    json.partial! 'comment', comment: @comment
    json.like_counts @comment.like_counts
    if @like
        json.like do
            json.extract! @like, :id, :is_like
        end
    else
        json.like @like
    end
end

json.video do
        json.partial! 'api/videos/video', video: @video
        json.extract! @video, :description
        json.video_url url_for(@video.video_file)
        json.comment_count @comment_count
end

json.user do
    json.partial! "api/users/user", user: @comment.user
end