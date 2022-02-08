import axios from "axios";
import { GET_USERS, CREATE_USERS, UPDATE_USERS, DELETE_USERS } from "./types";

const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users
    }
}

const createUser = (user) => {
    return {
        type: CREATE_USERS,
        payload: user
    }
}

const deleteUser = (id) => {
    return {
        type: DELETE_USERS,
        payload: { id }
    }
}

const updateUser = () => {
    return {
        type: UPDATE_USERS,
    }
}

export const loadUsers = () => {
    return function (dispatch) {
        axios.get('http://localhost:5000/users')
            .then((res) => {
                dispatch(getUsers(res.data))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const adduser = (user) => {
    return function (dispatch) {
        axios.post("http://localhost:5000/users", user)
            .then((res) => {
                console.log(res.data);
                dispatch(createUser(user))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const deleteUsers = (id) => {
    return function (dispatch) {
        axios.delete("http://localhost:5000/users/" + id)
            .then((res) => {
                dispatch(deleteUser(id))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const editUser = (user) => {
    return function (dispatch) {
        axios.put(`http://localhost:5000/users/${user.id}`, user)
            .then((res) => {
                dispatch(updateUser())
            })
            .catch((error) => {
                console.log(error);
            })
    }
}