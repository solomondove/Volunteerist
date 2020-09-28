import { connect } from 'react-redux';
import Map from './map';
import { fetchOffers } from '../../actions/offer_actions';
import {withRouter} from 'react-router-dom'; 

const mapSTP = state => ({
    listings: Object.values(state.entities.offers), 
    type: 'offer'

})

const mapDTP = dispatch => ({
    fetch: () => dispatch(fetchOffers())

})

export default withRouter(connect(mapSTP, mapDTP)(Map)); 