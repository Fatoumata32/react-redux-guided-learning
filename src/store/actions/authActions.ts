export const SIGN_IN = "auth/signIn" as const;
export const SIGN_OUT = "auth/signOut" as const;

export const signIn = (userName: string) => ({ type: SIGN_IN, userName });
export const signOut = () => ({ type: SIGN_OUT });