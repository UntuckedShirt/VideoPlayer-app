// at teh top we are gonna import list we have created
// we will then map the videos array
// then for every video we will render 1 single item component
// ---------------------------------------------------------------//

// the callback passed is onVideoSelect from app to tehvideoList
// pass in onvideoselect to
// we want to fix key prop error that will be internally used by react so its officially
// rerendered over time use key={video.id.videoId}

import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
      return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });
  
    return <div className="ui relaxed divided list">{renderedList}</div>;
  };
  
  export default VideoList;