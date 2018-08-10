import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            // search term
            term:''
        }
        //This refers to the SearchBar component
        this.onInputChange=this.onInputChange.bind(this)
    }

    onInputChange (event) {
        // console.log(event.target.value)
        this.setState({term:event.target.value})
    }

    // Use the event object to prevent form submission
    // Probably prevent default on all form submissions
    // Call the action creator so that an api request is called
    // This.state.term the search term entered will be a city
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchWeather(this.state.term)
        this.setState({term:''})
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className = "input-group">
            <input placeholder="Get a five day forecast in your favorite cities"
            className="form-controll"
            value={this.state.term}
            onChange={this.onInputChange}
            />
            <span className="input-group-button"/>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return(
        bindActionCreators({fetchWeather},dispatch)
)
}

export default connect(null, mapDispatchToProps)(SearchBar)