import React from 'react'; 
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react';
import Keys from '../../util/keys'; 
import {mapStyle} from './map_styles'; 

class AskMap extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            listings: this.props.listings, 
            showingInfoWindow: false, 
            activeListing: {}, 
            selectedPlace: {}
        }

        this.onMarkerClick = this.onMarkerClick.bind(this); 
        this.onMapClicked = this.onMapClicked.bind(this); 
    }

    componentDidMount() {
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
       return ( 
           <div> 

                <Map google={this.props.google} styles={mapStyle} zoom={14} onClick={this.onMapClicked}>
                    {this.state.listings.map((listing, i) => {
                        return (
                            <Marker key={i} onClick={() => this.onMarkerClick()}
                            listing={listing}
                            position={listing.location} /> 
                            )
                    })}
                    <Marker onClick={this.onMarkerClick}
                        listing={{ title: "Delores Park", description: "This is the description", timeCommitment: 2, category: "yardwork"}}
                        position={{ lat: 37.759703, lng: -122.428093 }} /> 
                    
                    <InfoWindow 
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}> 
                        <div id="info-window">
                            <h1>{this.state.selectedPlace.title}</h1>
                            <p>{this.state.selectedPlace.category}</p> 
                            <p>{this.state.selectedPlace.timeCommitment}</p>
                            <p>{this.state.selectedPlace.description}</p>
                        </div>
                    </InfoWindow>
                </Map>
           </div>
       )
   }
}; 

export default GoogleApiWrapper({apiKey: Keys.GoogleMapsAPI})(AskMap); 