export const date = createdAt => {
    const date = new Date(createdAt);
    const dateString = date.toDateString();
    const idx = dateString.indexOf(" ")
    return dateString.slice(idx + 1);
}

export const uploadTime = createdAt => {
    const date = new Date(createdAt);
    const dateNow = Date.now();
    const diff = Math.floor((dateNow - date)/1000);
    if(diff < 60){
        return `${Math.floor(diff)} seconds`;
    } else if ( diff >= 60 && diff < 120 ){
        return '1 minute'; 
    } else if ( diff >=120 && diff < 3600 ){
        return `${Math.floor(diff/60)} minutes`;
    } else if ( diff >= 3600 && diff < 7200 ){
        return '1 hour';
    } else if ( diff >= 7200 && diff < 86400){
        return `${Math.floor(diff/3600)} hours`;
    } else if ( diff >= 86400 && diff < 172800){
        return '1 day';
    } else if ( diff >= 172800 && diff < 2592000){
        return `${Math.floor(diff/86400)} days`;
    } else if ( diff >= 2592000 && diff < 5184000){
        return '1 month';
    } else if ( diff >= 5184000 && diff < 31536000){
        return `${Math.floor(diff/2592000)} months`;
    } else if ( diff >= 31536000 && diff < 63072000){
        return '1 year';
    } else if ( diff >= 63072000){
        return `${Math.floor(diff/31536000)} years`;
    }
}