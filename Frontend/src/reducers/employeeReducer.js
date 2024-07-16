import {
    FETCH_EMPLOYEES_SUCCESS,
    ADD_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_SUCCESS,
} from "../actions/actionTypes.js";

const initialState = {
    employees: [],
};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEES_SUCCESS:
            return { ...state, employees: action.payload };
        case ADD_EMPLOYEE_SUCCESS:
            return { ...state, employees: [...state.employees, action.payload] };
        case UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.map((employee) =>
                    employee.id === action.payload.id ? action.payload : employee
                ),
            };
        case DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.filter(
                    (employee) => employee.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
export default employeeReducer;
