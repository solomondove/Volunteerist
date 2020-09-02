import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import AskErrorsReducer from './ask_errors_reducer';
import OfferErrorsReducer from "./offer_errors_reducer";

export default combineReducers({
    session: SessionErrorsReducer,
    asks: AskErrorsReducer,
    offers: OfferErrorsReducer
});