// remember to go to your App component and import SearchBar
// we will be working first on the SeachBar of the applicaiton
// always want to make sure you crteate a label, form, className= 
// etc element in your div. className="ui segment" createsa nice rectangle
// for the searchbar
// we want to turn an unctronlled input to a controlled intput
// this prepares it for state of our searchBar class. we want to make sure we are
// storing data in our searchterm and not inside the DOM
// onChange prop is special if we pass a callback handler itll be called anytime
// the input is changed. it must be onChange it is special
// make sure to create on arrow function for your callbacks of onInputChange
// this callback method witll be called iwht an event obj
// we are making sure we take our value of input on our object and assign a property
// onFormSubmit = e => { e.preventDefault(); stops auto submition of th browser


import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = e => {
        this.setState({term: e.target.value});
    }
    onFormSubmit = e => {
        e.preventDefault();
        // todo: make sure to call callback from parent component
        this.props.onFormSubmit(this.state.term);
    };
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit}className="ui form">
                <div className="field">
                    <label>Video Search</label>
                        <input type="text" value={this.state.term}
                    onChange={this.onInputChange} />
                </div>
            </form>
        </div>
        )
    }

}

export default SearchBar
