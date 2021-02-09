import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_ERROR,
} from "../constants";
/**
 *  LOGIN
 * */

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
  payload: null,
  error: null,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
  error: null,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: null,
  error,
});

/**
 * VERIFY
 */

export const verifyRequest = () => ({
  type: VERIFY_REQUEST,
  payload: null,
  error: null,
});

export const verifySuccess = (user) => ({
  type: VERIFY_SUCCESS,
  payload: user,
  error: null,
});

export const verifyError = (error) => ({
  type: VERIFY_ERROR,
  payload: null,
  error,
});

/**
 * LOGOUT
 */

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
  payload: null,
  error: null,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  payload: null,
  error: null,
});

export const logoutError = (error) => ({
  type: LOGOUT_ERROR,
  payload: null,
  error,
});
