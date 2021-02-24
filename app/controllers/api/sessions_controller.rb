require 'google-id-token'

class Api::SessionsController < ApplicationController
    def google_sign_in
        validator = GoogleIDToken::Validator.new
      begin
        payload = validator.check(params[:id_token], JWT.decode(params[:id_token], nil, false)[0]["aud"], "915909549025-bkjrnktkij7a19urabsafcvcefjktipp.apps.googleusercontent.com")
        email = payload['email']
        @user = User.find_by(email: email)
      if(@user)
          @user.update_attribute(:image_url, payload['picture'])
          login(@user)
          render 'api/users/show'
        else
            username = payload['given_name'] + ' ' + payload['family_name']
            @user = User.new(email: email, username: username, password: SecureRandom.urlsafe_base64, image_url: payload['picture'])
          if @user.save
            login(@user)
            render 'api/users/show'
          else
            render json: @user.errors.full_messages, status: 401
          end
        end
      rescue GoogleIDToken::ValidationError => e
        report "Cannot validate: #{e}"
        render :json => "#{e}"
      end
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid email/password combination"], status: 422
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
end
