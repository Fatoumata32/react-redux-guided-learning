import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(logger));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;