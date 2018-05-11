import createReducer from './createReducer'
import * as types from '../helpers/type'

export const dinosours = createReducer({}, {
    [types.SAVE_DINOSOUR](state, action) {
       return Object.assign({}, state, {
            list: action.dinosours
        })
    }
})