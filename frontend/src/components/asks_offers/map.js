import React from 'react'; 
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react';
import Keys from '../../util/keys'; 
import {mapStyle} from './map_styles'; 

class AskMap extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            showingInfoWindow: false, 
            activeListing: {}, 
            selectedPlace: {}
        }

        this.onMarkerClick = this.onMarkerClick.bind(this); 
        this.onMapClicked = this.onMapClicked.bind(this); 
    }

    componentDidMount() {
        console.log(process);
        console.log('break=================================');
        console.log(process.env);
        console.log('break=================================');
        console.log(process.env.GOOGLE_MAPS_API)
        console.log('break=================================');
        console.log(Keys.GoogleMapsAPI)
        this.props.fetch(); 
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props.listing, 
            activeMarker: marker, 
            showingInfoWindow: true
        })
    }

    onMapClicked = () => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false, 
                activeMarker: {}, 
            })
        }
    }

   render() { 
       const containerStyle = {
           height: '85%'
       }
       
       return ( 
           <div className="map-container"> 

                <Map google={this.props.google} styles={mapStyle} containerStyle={containerStyle} zoom={14} onClick={this.onMapClicked}>
                    {this.props.listings.map(listing => 
                        <Marker onClick={this.onMarkerClick}
                            key={listing._id}
                            listing={listing}
                            position={listing.location} />    
                    )}
                    
                    <InfoWindow 
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}> 
                        <div id="info-window">
                            <h1>{this.state.selectedPlace.title}</h1>
                            <p>Category: {this.state.selectedPlace.category}</p> 
                            <p>Est. Time: {this.state.selectedPlace.timeCommitment} hr</p>
                            <p>Description: {this.state.selectedPlace.description}</p>
                        </div>
                    </InfoWindow>
                </Map>
           </div>
       )
   }
}; 

export default GoogleApiWrapper({apiKey: Keys.GoogleMapsAPI})(AskMap); 