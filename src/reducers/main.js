import {combineReducers} from 'redux';
import subjectsData from './subjects';

const allReducers = combineReducers({
   subjects : subjectsData 
});
export default allReducers;