import { CREATE_USERS, DELETE_USERS, GET_USERS, GET_USER_BY_ID, UPDATE_USERS } from "../actions/types";

const initialState = {
    users: [],
    user: {},
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case CREATE_USERS:
            return {
                ...state,
                user: action.payload
            }
        case DELETE_USERS:
            return {
                ...state,
                users: state.users.filter(({ id }) => id !== action.payload.id)
            };
        case UPDATE_USERS:
            return {
                ...state,
                user: action.payload
            };
        case GET_USER_BY_ID:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
}