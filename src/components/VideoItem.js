import './VideoItem.css';
import React from 'react';

// whenever someone onClicks i wanna call onVideoSelect with a particular video
// easy way to make sure we call onVideoselect appropriately we need to put in onclick

const VideoItem = ({ video, onVideoSelect }) => {
    return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  };
  
  export default VideoItem;