import * as types from '../helpers/type'

export function fetchRecipes(ingredients){
    return(dispatch, getState) => {
        recipe = [
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

        return dispatch(setSearchedRecipes({ recipes: recipe }))
    }
}