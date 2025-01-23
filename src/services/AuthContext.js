import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../services/Supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch session from AsyncStorage on app load
  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);
      try {
        const storedSession = await AsyncStorage.getItem('supabase_session');
        if (storedSession) {
          setSession(JSON.parse(storedSession));
        } else {
          const { data } = await supabase.auth.getSession();
          if (data?.session) {
            setSession(data.session);
            await AsyncStorage.setItem(
              'supabase_session',
              JSON.stringify(data.session)
            );
          }
        }
      } catch (error) {
        console.error('Error initializing session:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Subscribe to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        console.log('Auth event:', event);
        if (newSession) {
          setSession(newSession);
          await AsyncStorage.setItem(
            'supabase_session',
            JSON.stringify(newSession)
          );
        } else {
          setSession(null);
          await AsyncStorage.removeItem('supabase_session');
        }
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
      await AsyncStorage.removeItem('supabase_session');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ session, setSession, loading, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);