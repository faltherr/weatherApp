import React, {Component} from 'react'
const google = window.google;

class GoogleMap extends Component {
    componentDidMount() {
        // This is generally how we make third party libraries work nicely with react
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // this ref attribute is used by react as a reference ot an
        // element that has been rendered to the page : this.refs.map
        return (
        // ref gives us a direct reference to the html of the element
        // Use this.refs.map to access the HTML element
            <div ref="map" />
        );

    }
}

export default GoogleMap;