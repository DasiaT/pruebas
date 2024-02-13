import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    username: "",
    email:""
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addUser: (state, action) => {
            const { name, username , email} = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },
        
        ChangeEmail: (state, action) => {
            state.email = action.payload;
        }
    }
})

export const {addUser, ChangeEmail} = UserSlice.actions;
export default UserSlice.reducer;