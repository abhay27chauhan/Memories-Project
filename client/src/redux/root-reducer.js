import { combineReducers } from 'redux';
import postReducer from './post/post.reducer';
import currentIdReducer from './currentId/currentId.reducer';
import authReducer from './auth/auth.reducer';

const rootReducer = combineReducers({
    posts: postReducer,
    id: currentIdReducer,
    auth: authReducer
})

export default  rootReducer;