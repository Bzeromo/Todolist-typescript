import { applyMiddleware, combineReducers, createStore } from "redux";
import { tasks } from "./tasks";
import logger from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist"
import session from "redux-persist/lib/storage/session"
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage: session,
    whitelist: ['tasks'],
};

const combinedReducer = combineReducers({ tasks });

const rootReducer = persistReducer(persistConfig, combinedReducer)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof rootReducer>;