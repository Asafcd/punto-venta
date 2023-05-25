export interface AuthState {
    validated: Boolean,
    token: string | null,
    userId: string,
}

export type AuthAction = 
| { type: 'logout' }
| { type: 'login', payload: LoginPayload };

export interface LoginPayload {
  uid: string,
  utoken: string
}

export const initialState = {
  validated: false,
  userId: null,
  token: null,
};