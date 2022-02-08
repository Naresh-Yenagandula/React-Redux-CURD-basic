import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, getUserById } from '../redux/actions/actions';

function Edit(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState()
    const { user } = useSelector(state => state.data);
    useEffect(() => {
        dispatch(getUserById(id))
    }, [dispatch])

    useEffect(() => {
        setData(user)
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editUser(data))
        navigate('/')
    }
    return <div className='container'>
        <h3 className='text-center mt-4'> Edit User details</h3>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Enter your name: </label>
                <input type="text" className="form-control" id="name" defaultValue={data ? data.name : null} onChange={e => setData({ ...data, name: e.target.value })} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Enter Email Id: </label>
                <input type="email" className="form-control" id="email" defaultValue={data ? data.email : null} onChange={e => setData({ ...data, email: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={e => handleSubmit(e)}>Submit</button>
        </form>
    </div>;
}

export default Edit;
