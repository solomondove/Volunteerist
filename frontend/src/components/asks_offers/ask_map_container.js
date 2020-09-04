import { connect } from 'react-redux'; 
import Map from './map'; 
import { fetchAsks } from '../../actions/ask_actions';

const mapSTP = state => ({ 
    listings: Object.values(state.entities.asks)
})  

const mapDTP = dispatch => ({
    fetch: () => dispatch(fetchAsks())

})

export default connect(mapSTP, mapDTP)(Map); 