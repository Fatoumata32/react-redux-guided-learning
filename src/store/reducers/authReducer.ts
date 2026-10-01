import type { UnknownAction } from "redux";
import { SIGN_IN, SIGN_OUT } from "../actions/authActions";

interface AuthState {
  userName: string | null;
}

type AuthAction =
  | ReturnType<typeof import("../actions/authActions").signIn>
  | ReturnType<typeof import("../actions/authActions").signOut>;

const initialState: AuthState = { userName: null };

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction | UnknownAction,
): AuthState => {
  switch (action.type) {
    case SIGN_IN:
      if ("userName" in action && typeof action.userName === "string") {
        return { userName: action.userName };
      }
      return state;
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};