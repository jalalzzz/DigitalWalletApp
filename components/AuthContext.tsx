import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types for the authentication state
interface AuthState {
  isLoggedIn: boolean;
  userRole: 'Issuer' | 'Verifier' | 'Admin' | null;
  DIDType: 'national' | 'university'| null;
}

interface AuthContextProps extends AuthState {
  login: (role: 'Issuer' | 'Verifier' | 'Admin') => void;
  logout: () => void;
  selectType:(type:'national'| 'university')=>void;
}

interface DATA_TYPES  {
    NATIONAL: 'national',
    UNIVERSITY: 'university',
  };

// Create the context with an initial value of `null`
const AuthContext = createContext<AuthContextProps | null>(null);

// Create a provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<AuthState['userRole']>(null);
  const[DIDType,setDIDType]=useState<'national' | 'university'>('national');


  const login = (role: 'Issuer' | 'Verifier' | 'Admin') => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };
  const selectType = (type: 'national' | 'university' ) => {
     setDIDType(type);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout, DIDType ,selectType }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};