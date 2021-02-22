import { combineReducers } from 'redux';
import postReducer from './post/post.reducer';
import currentIdReducer from './currentId/currentId.reducer';

const rootReducer = combineReducers({
    posts: postReducer,
    id: currentIdReducer
})

export default  rootReducer;