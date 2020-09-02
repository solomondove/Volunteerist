import { connect } from 'react-redux';
import Map from './map';
import { fetchUserOffers } from '../../actions/offer_actions';

const mapSTP = state => ({
    listings: state.entities.offers

})

const mapDTP = (dispatch, ownProps) => ({
    fetch: () => dispatch(fetchUserOffers(ownProps.match.params.id))

})

export default connect(mapSTP, mapDTP)(Map); 