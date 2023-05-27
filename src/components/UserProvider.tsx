//@ts-nocheck
import React, { useReducer } from 'react';
import { UserContext, initialState } from '../models/AuthState.ts';
import { LoginReducer } from '../reducers/LoginReducer.ts';

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider