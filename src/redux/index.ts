import { combineReducers } from "redux";
import { tasks } from "./tasks";
import logger from "redux-logger"
import storage from "redux-persist"
import session from "redux-persist/lib/storage/session"
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage: session,
    whitelist: ['tasks'],
};

const combinedReducer = combineReducers({ tasks: tasks.reducer });

const rootReducer = persistReducer(persistConfig, combinedReducer)

// deprecated
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger))); 

export const store = configureStore({
    reducer: rootReducer,
    middleware: [logger],
    devTools: true
})

export const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof store.getState>;