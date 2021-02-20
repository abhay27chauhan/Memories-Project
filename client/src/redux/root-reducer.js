import { combineReducers } from 'redux';
import postReducer from './post/post.reducer';

const rootReducer = combineReducers({
    post: postReducer
})

export default  rootReducer;