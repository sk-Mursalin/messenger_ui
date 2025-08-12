import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chats",
    initialState: null,
    reducers: {
        addChats(state, action) {
            state = action.payload
            return state
        }
    }
});

export const { addChats } = chatSlice.actions;
export default chatSlice.reducer