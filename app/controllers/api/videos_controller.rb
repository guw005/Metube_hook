class Api::VideosController < ApplicationController
    def index
        @videos = Video.all.includes(:author)

        render 'api/videos/index'
    end

    def show
        @video = Video.find(params[:id])
        
        if @video
            @video.view_counts += 1
            @video.save


            title = @video.title.split("'").join("").split(" ").map { |t| "title LIKE '%#{t}%'" }
            title_input = title.join(" OR ")
            @videos = Video
            .with_attached_thumbnail
            .where.not(id: params[:id])
            .where(title_input)

            if @videos.length == 0
                @videos = Video.where.not(id: params[:id])
            end
            
            render 'api/videos/show'
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def create
        @video = Video.new(video_params)
        @video.author_id = current_user.id
        
        if @video.save
            title = @video.title.split("'").join("").split(" ").map { |t| "title LIKE '%#{t}%'" }
            title_input = title.join(" OR ")
            @videos = Video
            .with_attached_thumbnail
            .where.not(id: params[:id])
            .where(title_input)

            if @videos.length == 0
                @videos = Video.where.not(id: params[:id])
            end

            render 'api/videos/show'
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        @video = current_user.videos.find(params[:id])

        if @video.update_attributes(
            :title => params[:video][:title],
            :description => params[:video][:description]
            )

            title = @video.title.split("'").join("").split(" ").map { |t| "title LIKE '%#{t}%'" }
            title_input = title.join(" OR ")
            @videos = Video
            .with_attached_thumbnail
            .where.not(id: params[:id])
            .where(title_input)

            if @videos.length == 0
                @videos = Video.where.not(id: params[:id])
            end

            render 'api/videos/show'
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = current_user.videos.find(params[:id])

        @video.destroy
        @videos = Video.all.includes(:author)
        render 'api/videos/index'
    end

    def search
        @videos = Video.search_by_title(params[:result])
        render :index
    end

    private
    def video_params
        params.require(:video).permit(:title, :description, :video_file, :thumbnail)
    end
end
