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
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case SIGN_IN:
      return { userName: action.userName };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};