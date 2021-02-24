# MeTube (YouTube Clone)
<table>
<tr>
<td>
  MeTube is a video sharing platform that users can upload, edit and delete videos.  
</td>
</tr>
</table>


## Demo
Here is a working live demo :  https://metube-fsp.herokuapp.com/

## Site
### Video Index Page
![](https://github.com/guw005/MeTube/blob/master/index_snap.png)
### Video show Page
![](https://github.com/guw005/MeTube/blob/master/show_snap.png)
### Video Upload Form
![](https://github.com/guw005/MeTube/blob/master/upload_snap.png)
### Video Edit Form

## Technologies
- Ruby Rails
- React
- Redux
- Amazon S3
- Heroku

## Features
- Google User Authentication
- View all videos and single video
- Video upload, edit and Delete

## Challenges
### Google User Authentication
Learning the implement of Google Authentication is difficult since I had to figure out what type of data Google Auth sends to my front end and how to use these data to create a user at my backend.

After login through Google, I can fetch the id token and pass this through my frontend and using a custom ajax call to create a user in my backend.

Ajax call:
```ruby
export const googleLogin = (idToken) => {
    return $.ajax({
        method: "GET",
        url: '/api/session/google',
        data: {
            id_token: idToken
        }
    })
}
```
Session Controller:
```ruby
    def google_sign_in
        validator = GoogleIDToken::Validator.new
      begin
        payload = validator.check(params[:id_token], JWT.decode(params[:id_token], nil, false)[0]["aud"], "913398417254-hgqj42b4v6c6jsd8adri3u8k2ipr28ds.apps.googleusercontent.com")
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
```


## To-do
- Add a modal for the left bar.
- Add comment and like feature.
- Add infinity scroll for the video index page and comment section.
- Add a search bar.
- Create a custom video player.
