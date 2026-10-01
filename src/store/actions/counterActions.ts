export const INCREMENT = "counter/increment" as const;
export const DECREMENT = "counter/decrement" as const;
export const RESET = "counter/reset" as const;
export const SET_VALUE = "counter/setValue" as const;

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
export const setValue = (value: number) => ({ type: SET_VALUE, value });