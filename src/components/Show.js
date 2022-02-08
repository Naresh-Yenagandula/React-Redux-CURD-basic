import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers, loadUsers } from '../redux/actions/actions';
import { useNavigate } from 'react-router-dom'

function Show() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { users } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadUsers());
    }, [])


    const deleteData = (id) => {
        dispatch(deleteUsers(id))
    }
    return <div className='container'>
        <h3 className='text-center mt-3'>React curd operations with Redux</h3>
        <div className='float-end my-3'>
            <button className='btn btn-success' onClick={() => navigate('/add')}>ADD</button>
        </div>
        <table className='table table-hover table-bordered mt-4'>
            <thead>
                <tr>
                    <td>#</td>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className='btn-sm btn-primary me-3' onClick={e=>navigate(`/edit/${user.id}`)}>Edit</button>
                            <button className='btn-sm btn-danger' onClick={e => deleteData(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default Show;
