import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        insert(state, action) {
            state = action.payload
            return state
        }
    }
});

export const { insert } = feedSlice.actions;
export default feedSlice.reducer