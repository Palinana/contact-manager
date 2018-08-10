import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

export default combineReducers({
    contact: contactReducer // will be available in the props by this name
});