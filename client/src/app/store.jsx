import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userSlice from "../features/User/userSlice";

// import userSlice from "../features/user.jsx/userSlice";
// import postSlice from "../features/slices/postSlice";
// import commentSlice from "../features/comment/commentSlice";
// import connectionSlice from "../features/connection/connectionSlice";
// import reactionSlice from "../features/Reaction/reactionSlice";

// import chatSlice from "../features/chat/chatSlice";
// import messageSlice from "../features/messages/messageSlice";
// import notificationSlice from "../features/notification/notification.slice";
const persistConfig = {
    key: 'root',
    storage,
}
const rootreducer = combineReducers({
    user: userSlice,
    // comments: commentSlice,
    // post: postSlice,
    // connection: connectionSlice,
    // reaction: reactionSlice,
    // chats: chatSlice,
    // messages: messageSlice,
    // notifications :notificationSlice
})
const persistedReducer = persistReducer(persistConfig, rootreducer)
export const store = configureStore({
    reducer: persistedReducer,
})
export const persistor = persistStore(store)