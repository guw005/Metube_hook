# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Video.destroy_all
Like.destroy_all
Comment.destroy_all

require 'open-uri'

demo_user = User.create(username: "Demo User", email: "demouser@gmail.com", password: "password", image_url: "https://www.pinclipart.com/picdir/middle/167-1673006_16-icons-for-websites-about-me-icon-png.png")
lucas = User.create(username: "Lucas the Pom", email: "lucas@pom.com", password: "12345678", image_url:"https://previews.123rf.com/images/amaomam/amaomam1905/amaomam190500004/122898802-cute-pomeranian-cartoon-hand-drawn-style.jpg") 
bball = User.create(username: "bball", email: "bball@gmail.com", password: "abcdefgh", image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTooYXUBH44Whd1dPZFqfM3jkMorgW7hCF8xnCLl6hITUfnr8&s")


video1 = Video.new(title: "Hi, my name is Lucas", description: "I'm 5 yrs old", author_id: lucas.id)
thumbnail1 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/IMG_puppy1.PNG')
video1.thumbnail.attach(io: thumbnail1, filename: 'puppy1.png')
video_file1 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/puppy1.MP4')
video1.video_file.attach(io: video_file1, filename: 'puppy1.mp4')
video1.save

video2 = Video.new(title: "I can't wait", description: "Red suits me", author_id: lucas.id)
thumbnail2 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/IMG_puppy2.PNG')
video2.thumbnail.attach(io: thumbnail2, filename: 'puppy2.png')
video_file2 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/puppy2.MP4')
video2.video_file.attach(io: video_file2, filename: 'puppy2.mp4')
video2.save

video3 = Video.new(title: "Oops! My bad!", description: "I got nothing to say", author_id: lucas.id)
thumbnail3 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/IMG_puppy3.PNG')
video3.thumbnail.attach(io: thumbnail3, filename: 'puppy3.png')
video_file3 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/puppy3.MP4')
video3.video_file.attach(io: video_file3, filename: 'puppy3.mp4')
video3.save

video4 = Video.new(title: "Having fun with my best friend", description: "I'm not a bully", author_id: lucas.id)
thumbnail4 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/IMG_puppy4.PNG')
video4.thumbnail.attach(io: thumbnail4, filename: 'puppy4.png')
video_file4 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/puppy4.MP4')
video4.video_file.attach(io: video_file4, filename: 'puppy4.mp4')
video4.save

video5 = Video.new(title: "So tired", description: "zzzzzzzzzzz", author_id: lucas.id)
thumbnail5 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/IMG_puppy5.PNG')
video5.thumbnail.attach(io: thumbnail5, filename: 'puppy5.png')
video_file5 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/puppy5.MP4')
video5.video_file.attach(io: video_file5, filename: 'puppy5.mp4')
video5.save

video6 = Video.new(title: "Buddha for the win", description: "2019 CEB Championship", author_id: bball.id)
thumbnail6 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/video6.png')
video6.thumbnail.attach(io: thumbnail6, filename: 'video6.png')
video_file6 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/video6.MP4')
video6.video_file.attach(io: video_file6, filename: 'video6.MP4')
video6.save

video7 = Video.new(title: "Fastbreaks", description: "2019 CEB SemiFinal", author_id: bball.id)
thumbnail7 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/video7.png')
video7.thumbnail.attach(io: thumbnail7, filename: 'video7.png')
video_file7 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/video7.MP4')
video7.video_file.attach(io: video_file7, filename: 'video7.MP4')
video7.save

video8 = Video.new(title: "JC Highlights", description: "JC Highlights", author_id: bball.id)
thumbnail8 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/video8.png')
video8.thumbnail.attach(io: thumbnail8, filename: 'video8.png')
video_file8 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/video8.MP4')
video8.video_file.attach(io: video_file8, filename: 'video8.MP4')
video8.save

video9 = Video.new(title: "Pickup game 1", description: "location: UCSD RIMAC", author_id: bball.id)
thumbnail9 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/video9.png')
video9.thumbnail.attach(io: thumbnail9, filename: 'video9.png')
video_file9 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/video9.mp4')
video9.video_file.attach(io: video_file9, filename: 'video9.MP4')
video9.save

video10 = Video.new(title: "Pickup game 2", description: "location: UCSD RIMAC", author_id: bball.id)
thumbnail10 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/video10.png')
video10.thumbnail.attach(io: thumbnail10, filename: 'video10.png')
video_file10 = open('https://metube-seeds.s3-us-west-1.amazonaws.com/video10.mp4')
video10.video_file.attach(io: video_file10, filename: 'video10.MP4')
video10.save

comment1a = Comment.create(user_id: demo_user.id, video_id: video1.id, body: "Yass!!")
comment1b = Comment.create(user_id: lucas.id, video_id: video1.id, body: "Yasss!!")
comment1c = Comment.create(user_id: bball.id, video_id: video1.id, body: "Yassss!!")