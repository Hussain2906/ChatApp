import { supabase } from './Supabase';

export const signUp = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    return { user: data.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

export const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) throw error;
  
      return { user: data.user, error: null };
    } catch (error) {
      return { user: null, error: error.message };
    }
  };

