export const fetchAllVideos = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/videos',
    })
};

export const fetchVideo = videoId => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}`
    })
};

export const createVideo = video => {
    return $.ajax({
        method: 'POST',
        url: '/api/videos',
        data: video,
        contentType: false,
        processData: false
    })
};

export const updateVideo = (video, id) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/videos/${id}`,
        data: video,
        contentType: false,
        processData: false
    })
};

export const deleteVideo = videoId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/videos/${videoId}`
    })
}