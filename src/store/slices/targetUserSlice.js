import { createSlice } from "@reduxjs/toolkit";

const targetUserSlice = createSlice({
    name: "targetChatUser",
    initialState: JSON.parse(localStorage.getItem("chatUser")),
    reducers: {
        addTargetUser(state, action) {
            state = action.payload;
            localStorage.setItem("chatUser", JSON.stringify(action.payload))
            return state
        },
    }
});

export const { addTargetUser } = targetUserSlice.actions
export default targetUserSlice.reducer