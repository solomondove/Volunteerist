import { combineReducers } from "redux";
import users from './users_reducer';
import asks from './asks_reducer';
import offers from './offers_reducer';
import comments from './comments_reducer';

const EntitiesReducer = combineReducers({
    users,
    asks,
    offers,
    comments
});

export default EntitiesReducer;