import { combineReducers } from 'redux'
import * as recipesReducer from './recipe'

export default combineReducers(Object.assign(
    recipesReducer,
    )
)