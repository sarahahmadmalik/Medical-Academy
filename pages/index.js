import React from 'react';
import { useAuth } from '../context/AuthProvider'; 
import Login from './Login';
import Home from './Home'; 

export default function Index() {
  const auth = useAuth(); 
  console.log(auth.user)
  return auth.isLoggedIn ? <Home /> : <Login />;
}
