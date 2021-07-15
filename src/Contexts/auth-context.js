import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../Reducers/authReducer";

export const AuthContext = createContext();
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
