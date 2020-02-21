import {repositoryActionTypes} from './repository.types'

const INITIAL_STATE = {
    repositories:[],
    items: [],
    page: 1,
    hasMore: true
}

const repositorieReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case repositoryActionTypes.SET_CURRENT_REPOSITORY:
            return {
                ...state,
                repositories:  action.payload,    
            }
        default:
            return state
    }
}

export default repositorieReducer