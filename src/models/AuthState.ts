import { createContext } from "react";

export interface AuthState {
    validated: Boolean,
    token: string | null,
    userId: string | null,
}

export const initialState: AuthState = {
  validated: false,
  userId: null,
  token: null,
}

export type AuthAction = 
| { type: 'logout' }
| { type: 'login', payload: LoginPayload };

export interface LoginPayload {
  uid: string,
  utoken: string
}

export const UserContext = createContext<AuthState>(initialState);