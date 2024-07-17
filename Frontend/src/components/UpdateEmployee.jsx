import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    fetchEmployeeRequest,
    updateEmployeeRequest,
} from '../actions/actions';

const UpdateEmployee = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const employee = useSelector((state) => state.employee);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    useEffect(() => {
        dispatch(fetchEmployeeRequest(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (employee) {
            setName(employee.name);
            setEmail(employee.email);
            setPhonenumber(employee.phonenumber);
            setAddress(employee.address);
            setCity(employee.city);
            setState(employee.state);
        }
    }, [employee]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedEmployee = { name, email, phonenumber, address, city, state };
        dispatch(updateEmployeeRequest(id, updatedEmployee));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Employee</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phonenumber</label>
                <input type="tel" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
            </div>
            <div>
                <label>Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div>
                <label>State</label>
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
            <button type="submit">Update Employee</button>
        </form>
    );
};

export default UpdateEmployee;
