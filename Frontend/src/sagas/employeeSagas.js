import axios from 'axios';
import {
    FETCH_EMPLOYEES_FAILURE,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_REQUEST,
    ADD_EMPLOYEE_FAILURE,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_FAILURE,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_FAILURE,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_REQUEST
} from '../actions/actionTypes.js'
import api from '../services/api.js'
import {call, put,takeLatest} from 'redux-saga/effects'

function* fetchEmployees() {
    try {
        const response = yield call(axios.get, 'http://localhost:5001/api/v1/employees/getEmployee')
        console.log(response);
        yield put({ type: FETCH_EMPLOYEES_SUCCESS, payload: response.data })
    } catch (error) {
        yield put({ type: FETCH_EMPLOYEES_FAILURE, payload: error })
    }


}

function* addEmployee(action){
    try{
        const response = yield call(axios.post,'http://localhost:5001/api/v1/employees/addEmployee', action.payload)
        yield put({type:ADD_EMPLOYEE_SUCCESS, payload:response.data})

    }catch(error){
        yield put({type:ADD_EMPLOYEE_FAILURE, payload:error.message})
    }
}

function* updateEmployee(action){
    try {
        // const { id, data } = action.payload;
        const response = yield call(axios.patch, `http://localhost:5001/api/v1/employees/updateEmployee/${action.payload.id}`, action.payload)
        yield put({type:UPDATE_EMPLOYEE_SUCCESS, payload:response.data})
        
    } catch (error) {
        yield put({type:UPDATE_EMPLOYEE_FAILURE, payload:error.message})
    }
}

function* deleteEmployee(action){
    try {
        const response = yield call(axios.delete, `http://localhost:5001/api/v1/employees/deleteEmployee/${action.payload}`, action.payload)
            yield put({type:DELETE_EMPLOYEE_SUCCESS, payload:response.data}) 
        
    } catch (error) {
        yield put({type:DELETE_EMPLOYEE_FAILURE, payload:error.message})
    }
}

function* employeeSagas(){
    yield takeLatest(FETCH_EMPLOYEES_REQUEST, fetchEmployees)
    yield takeLatest(ADD_EMPLOYEE_REQUEST, addEmployee)
    yield takeLatest(UPDATE_EMPLOYEE_REQUEST, updateEmployee)
    yield takeLatest(DELETE_EMPLOYEE_REQUEST, deleteEmployee)
}

export default employeeSagas;