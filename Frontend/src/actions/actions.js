// actions.js
import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
} from "./actionTypes";

export const fetchEmployeeRequest = (id) => ({
  type: FETCH_EMPLOYEES_REQUEST,
  payload: id,
});

export const fetchEmployeeSuccess = (employee) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employee,
});

export const fetchEmployeeFailure = (error) => ({
  type: FETCH_EMPLOYEES_FAILURE,
  payload: error,
});

export const updateEmployeeRequest = (id, data) => ({
  type: UPDATE_EMPLOYEE_REQUEST,
  payload: { id, data },
});

export const updateEmployeeSuccess = (employee) => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
  payload: employee,
});

export const updateEmployeeFailure = (error) => ({
  type: UPDATE_EMPLOYEE_FAILURE,
  payload: error,
});
