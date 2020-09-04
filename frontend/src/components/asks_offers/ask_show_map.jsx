import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import Keys from '../../util/keys';
import { mapStyle } from './map_styles';

class AskMap extends React.Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} disableDefaultUI={true} styles={mapStyle} zoom={16} 
        initialCenter={this.props.location}
        >
          <Marker 
            position={this.props.location} />
        </Map>
      </div>
    )
  }
};

export default GoogleApiWrapper({ apiKey: Keys.GoogleMapsAPI })(AskMap); 