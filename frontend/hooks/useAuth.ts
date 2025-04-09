// Frontend - Hooks

// useAuth.ts
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
export function useAuth() {
  return useContext(AuthContext);
//export const useAuth = () => useContext(AuthContext);
}
