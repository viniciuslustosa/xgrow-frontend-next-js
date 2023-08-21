"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { User } from '../@types/user';
import Cookie from 'js-cookie';
import api, { defaults } from '../config/api';
import { useRouter } from 'next/navigation'

interface AuthContextData {
  signed: boolean;
  user: Partial<User> | null;
  Login(email: string, otp: string): Promise<void>;
  Logout(): void;
  SendToken(email: string): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
    children: ReactNode;
  }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Partial<User> | null>(null);
  const [email, setEmail] = useState<User['email'] | null>(null);
  const [signed, setSigned] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const storagedUser = Cookie.get('@App:user');
    const storagedToken = Cookie.get('@accessToken');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      setSigned(true);
      defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  useEffect(() => {
    setSigned(Boolean(user))
  }, [user])

  async function Login(email: User['email'], otp: string) {
    try {
      const response = await api.post('auth/login/otp', { email, otp });
      
      defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
      
      Cookie.set('@App:user', JSON.stringify({ email }));
      Cookie.set('accessToken', response.data.access_token);

      setUser({ email })
      setSigned(true);
      router.push('/cursos')
    } catch (error) {
      router.push('/login')
      console.log(error)
    }
  }

  async function SendToken(email: string) {
    try {
      await api.post('auth/login', { email });
      router.push('/login/token')
      setUser({ email }); 
    } catch (error) {
      console.log(error)
    }
  }

  function Logout() {
    Cookie.remove('@App:user');
    Cookie.remove('accessToken');
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed, user, SendToken, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}