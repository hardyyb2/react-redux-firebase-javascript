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
 **/

const loginRequest = () => ({
  type: LOGIN_REQUEST,
  payload: null,
  error: null,
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
  error: null,
});

const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: null,
  error,
});

/**
 * VERIFY
 **/

const verifyRequest = () => ({
  type: VERIFY_REQUEST,
  payload: null,
  error: null,
});

const verifySuccess = (user) => ({
  type: VERIFY_SUCCESS,
  payload: user,
  error: null,
});

const verifyError = (error) => ({
  type: VERIFY_ERROR,
  payload: null,
  error,
});

/**
 * LOGOUT
 **/

const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
  payload: null,
  error: null,
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  payload: null,
  error: null,
});

const logoutError = (error) => ({
  type: LOGOUT_ERROR,
  payload: null,
  error,
});

const authActions = {
  loginRequest,
  loginSuccess,
  loginError,

  verifyRequest,
  verifySuccess,
  verifyError,

  logoutRequest,
  logoutSuccess,
  logoutError,
};

export default authActions;
