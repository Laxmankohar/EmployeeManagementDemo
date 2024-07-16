import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_EMPLOYEE_REQUEST } from '../actions/actionTypes';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_EMPLOYEE_REQUEST, payload: { name, position, department, salary } });
        setName('');
        setPosition('');
        setDepartment('');
        setSalary('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>
            <div>
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Position</label>
                <input value={position} onChange={(e) => setPosition(e.target.value)} />
            </div>
            <div>
                <label>Department</label>
                <input value={department} onChange={(e) => setDepartment(e.target.value)} />
            </div>
            <div>
                <label>Salary</label>
                <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddEmployee;
