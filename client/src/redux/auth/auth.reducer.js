import AuthActionTypes from './auth.types';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type){
    case AuthActionTypes.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action.data }))

      return { ...state, authData: action.data, loading: false, errors: null };
    
    case AuthActionTypes.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };

    default:
      return state;
  }
};

export default authReducer;