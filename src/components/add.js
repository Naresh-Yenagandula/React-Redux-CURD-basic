import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adduser } from '../redux/actions/actions';

function Add() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(adduser(data))
        navigate('/')
    }
    return <div className='container'>
        <h3 className='text-center mt-4'> Add User details</h3>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Enter your name: </label>
                <input type="text" className="form-control" id="name" onChange={e => setData({ ...data, name: e.target.value })} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Enter Email Id: </label>
                <input type="email" className="form-control" id="email" onChange={e => setData({ ...data, email: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={e => handleSubmit(e)}>Submit</button>
        </form>
    </div>;
}

export default Add;
