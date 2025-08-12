import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import feedReducer from "./slices/feedSlice";
import targetChatUserReducer from "./slices/targetUserSlice"
export const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        targetChatUser: targetChatUserReducer
    }
})

