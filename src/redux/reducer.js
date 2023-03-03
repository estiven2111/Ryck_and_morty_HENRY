import { ADD_PERSON, DELETE_PERSON } from "./types";

const initialState = {
    myFavorites: []
}
// {type,payload}
export default function reducer  (state = initialState, {type,payload})  {
    switch (type) {
        case ADD_PERSON: {
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        }
        case DELETE_PERSON: {
            const filtered = state.myFavorites.filter(per =>per.id !== payload)
            return {
                ...state,
                myFavorites:filtered

            }
        }
        default: {
            return {...state} 
        }
    }
};
