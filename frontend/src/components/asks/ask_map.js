import React from 'react'; 
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react';
import Keys from '../../util/keys'; 

class AskMap extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            asks: this.props.asks
        }
    }

    onMarkerClick () {
        console.log(this.title)
    }
   render() {
       debugger; 
       return ( 
           <Map google={this.props.google} zoom={14}>
               <Marker onClick={this.onMarkerClick}
                    title={'Current Location'} /> 
               <Marker
                   title={'The marker`s title will appear as a tooltip.'}
                   name={'SOMA'}
                   position={{ lat: 37.778519, lng: -122.405640 }} 
                   onClick={this.onMarkerClick} />
                
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>i am the info window</h1>
                    </div>
                </InfoWindow>
           </Map>
       )
   }
}; 

export default GoogleApiWrapper({apiKey: Keys.GoogleMapsAPI})(AskMap); 