import * as dinosourReducer from './dinosour'
import { combineReducers } from 'redux'

export default combineReducers(Object.assign(
    dinosourReducer,
    )
)