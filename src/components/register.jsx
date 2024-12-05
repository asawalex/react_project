import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    addNew: [],
};

const register = createSlice({
    name: "addUser",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const { userName, password, email, phoneNumber } = action.payload;

            state.addNew.push({
                id: nanoid(),
                userName,
                password,
                email,
                phoneNumber,
                completed: false,
            });
        },
    },
});

export default register.reducer;
export const { registerUser } = register.actions; // Correct export for action
