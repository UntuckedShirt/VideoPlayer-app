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
// response.data.items[0] is used when we do a search go ahead and take
// the first vid in result set and use as defualt video
// we should show some defualt sdearch for loading text
// compose a component didmount method will make a defualt search when app
// is rednered to the screen

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('fighting games')
    }
  
    onTermSubmit = async (term) => {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
  
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };
  
    onVideoSelect = (video) => {
      this.setState({ selectedVideo: video });
    };
  
    render() {
      return (
        <div className="ui container">
              <SearchBar onFormSubmit={this.onTermSubmit} />
              <div className="ui grid">
                  <div className="ui row">
                      <div className="eleven wide column">
                          <VideoDetail video={this.state.selectedVideo} />
                      </div>
                      <div className="five wide column">
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
                          />
                          </div>
                    </div>
                </div>
        </div>
      );
    }
  }
  
  export default App;