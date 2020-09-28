import React from 'react'; 
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { mapStyle } from './map_styles'; 
import InfoWindowEx from './map_info_window_ex'; 
import {retrieveMapKey, getMapKey, setMapCookie} from '../../util/map_api_util';

class AskMap extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            showingInfoWindow: false, 
            activeListing: {}, 
            selectedPlace: {},
        }
        this.onMarkerClick = this.onMarkerClick.bind(this); 
        this.onMapClicked = this.onMapClicked.bind(this); 
        this.selectedListing = this.selectedListing.bind(this); 
        this.showDetails = this.showDetails.bind(this); 
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

    selectedListing = (listing) => {
        if (this.props.type === "ask") {
            if (!listing.hasVolunteer && !listing.askCompleted ) {
                return ( 
                    <Marker onClick={this.onMarkerClick}
                        key={listing._id}
                        listing={listing}
                        position={listing.location} />  
                )
            }
        } else { 
            if (!listing.offerCompleted) {
                return ( 
                    <Marker onClick={this.onMarkerClick}
                        key={listing._id}
                        listing={listing}
                        position={listing.location} />  
                )
            }
        }
    }; 

    showDetails = () => {
        if (this.props.type === 'ask') {
            this.props.history.push(`/asks/${this.state.selectedPlace._id}`)
        } else {
            this.props.history.push(`/offers/${this.state.selectedPlace._id}`)
        }
    }

   render() { 
       const containerStyle = {
           height: '85%'
       }
       
       return ( 
           <div className="map-container"> 

                <Map google={this.props.google} 
                    styles={mapStyle} 
                    containerStyle={containerStyle} 
                    disableDefaultUI={true}
                    zoom={14} 
                    onClick={this.onMapClicked}>
                    {this.props.listings.map(listing => 
                        this.selectedListing(listing)  
                    )}
                    
                    <InfoWindowEx 
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}> 
                        <div id="info-window">
                            <h1>{this.state.selectedPlace.title}</h1>
                            <p>Category: {this.state.selectedPlace.category}</p> 
                            <p>Est. Time: {this.state.selectedPlace.timeCommitment} hr</p>
                            <p>Description: {this.state.selectedPlace.description}</p>
                            <button className="dash-select" id="info-window-btn" onClick={() => this.showDetails()}>Details</button>  
                        </div>
                    </InfoWindowEx>
                </Map>
           </div>
       )
   }
}; 

// for retrieving map api from backend
const mapKey = retrieveMapKey("mapKeyCookie");
if (mapKey === '') {
    getMapKey().then(key => {
        setMapCookie("mapKeyCookie", key.data, 1);
        window.location.reload();
    });
}
export default GoogleApiWrapper({apiKey: mapKey})(AskMap);
