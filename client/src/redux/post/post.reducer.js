import PostActionTypes from './post.types';

const INITIAL_STATE = {
    posts: []
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PostActionTypes.CREATE:
        default:
            return state;
    }
}

export default postReducer;