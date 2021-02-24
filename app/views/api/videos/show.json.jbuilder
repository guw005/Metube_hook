json.video do
    json.partial! 'api/videos/video', video: @video
    json.extract! @video, :description
    json.video_url url_for(@video.video_file)
end

json.user do
    json.partial! 'api/users/user', user: @video.author
end
    
if @videos
    json.videos do
        @videos.each do |video|
            json.set! video.id do
                json.extract! video,:id, :title, :author_id, :view_counts, :created_at
                json.thumbnail url_for(video.thumbnail)
            end
        end
    end
end

json.users do
    @videos.each do |video|
        json.set! video.author_id do
            json.extract! video.author, :id, :username, :image_url
        end
    end
end
