import {combineReducers} from 'redux';
			
import repositorieReducer from './repositories/repositories-reducer';

export default combineReducers({
    repositories: repositorieReducer   
})