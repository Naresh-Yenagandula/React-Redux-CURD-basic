import { CREATE_USERS, DELETE_USERS, GET_USERS, UPDATE_USERS } from "../actions/types";

const initialState = {
    users: [],
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
                user:state.filter(({id})=>id!==action.payload.id)
            };
        case UPDATE_USERS:
            return { state };

        default:
            return state;
    }
}