import AuthActionTypes from './auth.types';
import * as api from '../../api/api';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AuthActionTypes.AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AuthActionTypes.AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};