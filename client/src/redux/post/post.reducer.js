import PostActionTypes from './post.types';

const INITIAL_STATE = {
    posts: []
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PostActionTypes.CREATE:
            return {
                posts: action.payload
            }

        case PostActionTypes.UPDATE:
            return {
                posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post)
            }
        default:
            return state;
    }
}

export default postReducer;