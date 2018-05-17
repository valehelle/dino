import * as types from '../helpers/type'
import {dinosourList} from '../database/dinosour'
export function fetchDinosours(ingredients){
    return(dispatch, getState) => {
        const dinosours = dinosourList();

        return dispatch(saveDinosour({ dinosours: dinosours }))
    }
}

export function saveDinosour({ dinosours }){
    return {
        type: types.SAVE_DINOSOUR,
        dinosours: dinosours,
    }   
}