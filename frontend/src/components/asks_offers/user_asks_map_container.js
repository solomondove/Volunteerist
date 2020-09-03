import { connect } from 'react-redux';
import Map from './map';
import { fetchUserAsks } from '../../actions/asks_actions';

const mapSTP = state => ({
    listings: state.entities.asks

})

const mapDTP = (dispatch, ownProps)=> ({
    fetch: () => dispatch(fetchUserAsks(ownProps.match.params.id))

})

export default connect(mapSTP, mapDTP)(Map); 