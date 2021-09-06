// atteh top we are gonna import list we have created
// we will then map the videos array
// then for every video we will render 1 single item component

import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video={video}/>;
    });

    return <div className="ui relaxed divided list"> {renderedList} </div>;


};

export default VideoList