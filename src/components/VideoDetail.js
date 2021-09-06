// this file will contain the videoDetail component
// it should show a video player and desciption
// essentially inside video detail shows up as the value null

// ---------------------------------------------------------------//

// 

import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
      return <div>Loading...</div>;
    }
  
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={ videoSrc} />
                </ div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</ h4>
                <p> {video.snippet.description} </p>
            </div>
        </div>
    )
  };
  
  export default VideoDetail;