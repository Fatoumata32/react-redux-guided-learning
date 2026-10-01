import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./reducers";

const STORAGE_KEY = "react-redux-guided-learning-state";

function loadState(): ReturnType<typeof rootReducer> | undefined {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (!savedState) return undefined;

    const parsed: unknown = JSON.parse(savedState);
    if (typeof parsed !== "object" || parsed === null) return undefined;

    const state = parsed as Record<string, unknown>;
    const counter = state.counter as Record<string, unknown> | undefined;
    const auth = state.auth as Record<string, unknown> | undefined;

    if (
      typeof counter?.value !== "number" ||
      !(typeof auth?.userName === "string" || auth?.userName === null)
    ) {
      return undefined;
    }

    return {
      counter: { value: counter.value },
      auth: { userName: auth.userName },
    };
  } catch {
    return undefined;
  }
}

export const store = createStore(
  rootReducer,
  loadState(),
  applyMiddleware(logger),
);

store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()));
  } catch {
    // Storage can be unavailable or full; Redux state remains usable in memory.
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;