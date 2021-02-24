json.extract! video, :id, :title, :author_id, :view_counts, :created_at
json.thumbnail url_for(video.thumbnail)