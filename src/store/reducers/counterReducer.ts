import type { UnknownAction } from "redux";
import {
  DECREMENT,
  INCREMENT,
  RESET,
  SET_VALUE,
} from "../actions/counterActions";

interface CounterState {
  value: number;
}

type CounterAction =
  | ReturnType<typeof import("../actions/counterActions").increment>
  | ReturnType<typeof import("../actions/counterActions").decrement>
  | ReturnType<typeof import("../actions/counterActions").reset>
  | ReturnType<typeof import("../actions/counterActions").setValue>;

const initialState: CounterState = { value: 0 };

export const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction | UnknownAction,
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    case RESET:
      return initialState;
    case SET_VALUE:
      if ("value" in action && typeof action.value === "number") {
        return { value: action.value };
      }
      return state;
    default:
      return state;
  }
};