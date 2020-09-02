import { connect } from 'react-redux';
import Map from './map';
import { fetchOffers } from '../../actions/offer_actions';

const mapSTP = state => ({
    listings: state.entities.offers

})

const mapDTP = dispatch => ({
    fetch: () => dispatch(fetchOffers())

})

export default connect(mapSTP, mapDTP)(Map); 