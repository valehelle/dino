import * as types from '../helpers/type'

export function fetchDinosours(ingredients){
    return(dispatch, getState) => {
        dinosours = [
            {
                'id':1,
                'name':'hazmi'
            },
            {
                'id':2,
                'name':'dddd'
            },
            {
                'id':3,
                'name':'zzz'
            },
            {
                'id':4,
                'name':'fffff'
            },            
            ]

        return dispatch(saveDinosour({ dinosours: dinosours }))
    }
}

export function saveDinosour({ dinosours }){
    return {
        type: types.SAVE_DINOSOUR,
        dinosours: dinosours,
    }   
}