import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { mapStyle } from './map_styles';
import { retrieveMapKey, getMapKey, setMapCookie } from '../../util/map_api_util';


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

// for retrieving map api from backend
const mapKey = retrieveMapKey("mapKeyCookie");
if (mapKey === '') {
  getMapKey().then(key => {
    setMapCookie("mapKeyCookie", key.data, 1);
    window.location.reload();
  });
}

export default GoogleApiWrapper({ apiKey: mapKey })(AskMap); 