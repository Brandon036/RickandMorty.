import { ADD_FAVORITE, DELETE_FAVORITE } from "./action";


const initialState ={
    myfavorites: [],
};

const Reducer = (state =  initialState, action) =>{
    switch (action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                myfavorites:  [...state.myfavorites, action.payload]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                myfavorites: state.myfavorites.filter((char)=> char.id !== action.payload)
            }
        
        default:
            return {...state}
    }
};
export default Reducer