import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
// as always our App will be a class based component and will hold all
// different state for out application
// we will be working first on the SeachBar of the applicaiton
// this creates a margin for a searchBar <div className="ui container">
// <SearchBar /> </div>
// anytime someone hits enter we want to reach out to the API and find results

// ---------------------------------------------------------------//

// makin a api request is ansycronous. when amking one we need promises or async await syntax
// Whenever the app componenet shows the videoLIst we have to give 
// the vdieolist the list of video obj to fetch so itk nows what ot render
// ---------------------------------------------------------------//

// add a new prop to state object called selectedVideo, underneath onTmerSubmit
// call a new callback onVideoSelect. The video obj is from the youtube api
// pass a reference to callback down to the videoList as a prop
// make sure to double check that you are passing down a prop as video NOT videos
// we were passing and array of obj that made sense to pass the plural

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
  
    onTermSubmit = async (term) => {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
  
      this.setState({ videos: response.data.items });
    };
  
    onVideoSelect = (video) => {
      this.setState({ selectedVideo: video });
    };
  
    render() {
      return (
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      );
    }
  }
  
  export default App;