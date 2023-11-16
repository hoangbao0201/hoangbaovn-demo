import { createSlice } from "@reduxjs/toolkit";

export interface UserSlideState {
    id: string
    name: string
    email: string
    username: string
    rank: number
    avatarUrl: string
}

interface initialStateProps {
    currentUser: UserSlideState | null
    userLoading: boolean
    isAuthenticated: boolean
}
const initialState : initialStateProps = {
    currentUser: null,
    userLoading: false,
    isAuthenticated: false,
};

export const counterSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUserHandle: (state, action) => {
            state.currentUser = action.payload
            state.userLoading = false
            state.isAuthenticated = true
        },
        logoutUserHandle: (state) => {
            state.currentUser = null
            state.userLoading = false
            state.isAuthenticated = false
        },
        loadingUserHandle: (state, action) => {
            state.userLoading = action.payload;
        }
    },
});

export const { addUserHandle, logoutUserHandle, loadingUserHandle } = counterSlice.actions;

export default counterSlice.reducer;
