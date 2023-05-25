//@ts-nocheck
import { useReducer } from "react";

import { AuthState, AuthAction, initialState } from "../models/AuthState.ts";
import { login } from "../resources/Auth.ts";

export const LoginReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'login':
            const {uid, utoken} = action.payload
        
            const tempState = { 
                validated: true,
                userId: uid,
                token: utoken
            }

            return tempState

        case 'logout':
            return { ...initialState, validated: false } 
            
        default:
            return state;
    }
  }