@videos.each do |video|
    json.videos do
        json.set! video.id do
            json.partial! 'api/videos/video', video: video
            json.extract! video, :description
        end
    end

    json.users do
        json.set! video.author_id do
            json.partial! 'api/users/user', user: video.author
        end
    end
end