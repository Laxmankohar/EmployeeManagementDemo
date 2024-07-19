import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_EMPLOYEE_REQUEST } from '../actions/actionTypes';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { name, email, phonenumber, address, city, state };
        console.log('Dispatching payload:', payload);
        dispatch({ type: ADD_EMPLOYEE_REQUEST, payload });
        // Clear input fields after submission
        setName('');
        setEmail('');
        setPhonenumber('');
        setAddress('');
        setCity('');
        setState('');
    };

    return (
        <div className="mx-auto max-w-lg px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="phonenumber">Phone Number</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phonenumber" type="tel" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="address">Address</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="city">City</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="state">State</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="state" type="text" value={state} onChange={(e) => setState(e.target.value)} />
                </div>
                <div className="text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Add Employee
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;
