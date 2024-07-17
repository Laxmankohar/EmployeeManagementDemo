import{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_EMPLOYEE_REQUEST } from '../actions/actionTypes';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_EMPLOYEE_REQUEST, payload: { name, email, phonenumber, address,city, state} });
        setName('');
        setEmail('');
        setPhonenumber('');
        setAddress('');
        setCity('');
        setState('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phonenumber</label>
                <input type='number' value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
            </div>
            <div>
                <label>City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div>
                <label>State</label>
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployee;
