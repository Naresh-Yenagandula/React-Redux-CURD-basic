import axios from "axios";
import { GET_USERS, CREATE_USERS, UPDATE_USERS, DELETE_USERS, GET_USER_BY_ID } from "./types";

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

const updateUser = (user) => {
    return {
        type: UPDATE_USERS,
        payload: user
    }
}

const getById = (user) => {
    return {
        type: GET_USER_BY_ID,
        payload: user
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
                dispatch(updateUser(user))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const getUserById = (id) => {
    return function (dispatch) {
        axios.get("http://localhost:5000/users/" + id)
            .then((res) => {
                dispatch(getById(res.data))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
