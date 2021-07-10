import { createContext, useContext, useReducer } from "react";

export const AuthContext = createContext();
function authReducer(state, { type, payload }) {
  switch (type) {
    case "LOGIN_USER": {
      return { ...state, id: payload.id, username: payload.username };
    }
    case "LOGOUT_USER": {
      return { ...state, id: null, username: null };
    }
    default: {
      return state;
    }
  }
}
export function AuthProvider({ children }) {
  const [auth, dispatchAuth] = useReducer(authReducer, {});
  return (
    <AuthContext.Provider value={{ auth, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
