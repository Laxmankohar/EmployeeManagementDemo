import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_EMPLOYEES_REQUEST, DELETE_EMPLOYEE_REQUEST } from '../actions/actionTypes';

const EmployeeList = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.employees);

    useEffect(() => {
        dispatch({ type: FETCH_EMPLOYEES_REQUEST });
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch({ type: DELETE_EMPLOYEE_REQUEST, payload: id });
    };

    return (
        <div>
            <h2>Employee List</h2>

            <ul>
                {employees.map((employee) => (
                    <li key={employee._id}>
                        {employee.name} - {employee.email}
                        <button onClick={() => handleDelete(employee._id)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default EmployeeList;
