import axios from 'axios'

const KEY = 'AIzaSyBLpTIU1IKzT2F3J3MDgH2Oi8QWsjh_BRY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});