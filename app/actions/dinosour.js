import * as types from '../helpers/type'

export function fetchDinosours(ingredients){
    return(dispatch, getState) => {
        dinosours = [
            {
                'id':1,
                'name':'Aazmi',
                'alphabet': 'A',
                'sound': 'sound.mp3',
                'image': require('../assests/images/dinosour.jpg'),
                'pronunciation': 'A-A'
            },
            {
                'id':2,
                'name':'Bazmi',
                'alphabet': 'B',
                'sound': 'sound.mp3',
                'image': require('../assests/images/dinosour2.jpg'),
                'pronunciation': 'A-B'
            },
            {
                'id':3,
                'name':'Cazmi',
                'alphabet': 'C',
                'sound': 'sound.mp3',
                'image': require('../assests/images/dinosour.jpg'),
                'pronunciation': 'A-C'
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