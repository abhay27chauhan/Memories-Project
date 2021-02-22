import IdActionTypes from "./currentId.types";

const INITIAL_STATE = {
    id: 0
}

const currentIdReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case IdActionTypes.SET:
            return {
                id: action.payload
            }
        default:
            return state;
    }
}

export default currentIdReducer;