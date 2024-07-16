import {combineReducers} from 'redux'
import employeeReducer from "./employeeReducer.js";

const rootReducer = combineReducers({
    employees:employeeReducer,
})
export default rootReducer;