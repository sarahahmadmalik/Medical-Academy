import React from 'react';
import { useAuth } from '../context/AuthProvider'; 
import Login from './Login';
import Home from './items'; 

export default function Index() {
  const auth = useAuth(); 
  return auth.isLoggedIn ? <Home /> : <Login />;
}
