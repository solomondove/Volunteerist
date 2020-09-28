import { connect } from 'react-redux';
import ShowMap from './ask_show_map';

const mapSTP = (state, ownProps) => {
  return { location: ownProps.location }
}

export default connect(mapSTP, null)(ShowMap); 