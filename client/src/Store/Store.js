import create from "zustand";
import { devtools, redux, persist } from "zustand/middleware";

const initialState = { user: { token: "" }, messages: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: { token: action.payload }, ...state };
    case LOGOUT:
      return { user: {} };
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(persist(devtools(redux(reducer, initialState))));
