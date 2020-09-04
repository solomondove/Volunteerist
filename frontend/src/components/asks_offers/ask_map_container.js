import { connect } from 'react-redux'; 
import Map from './map'; 
import { fetchAsks } from '../../actions/ask_actions';
import { withRouter } from 'react-router-dom'; 


const mapSTP = state => ({ 
    listings: Object.values(state.entities.asks),
    type: 'ask'
    
})  

const mapDTP = dispatch => ({
    fetch: () => dispatch(fetchAsks())

})

export default withRouter(connect(mapSTP, mapDTP)(Map)); 