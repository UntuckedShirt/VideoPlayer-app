import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
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


class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                    <VideoList videos={this.state.videos} />
            </div>
        )

    }

}

export default App;