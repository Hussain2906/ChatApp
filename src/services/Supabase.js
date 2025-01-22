import 'react-native-url-polyfill/auto'; // Import this before anything else
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kxiysuutizmbxsrlzcly.supabase.co'; // Replace with your Supabase project URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aXlzdXV0aXptYnhzcmx6Y2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NDcwMTUsImV4cCI6MjA1MzAyMzAxNX0.3tQ3v4qEVhqG-o8rSH0QIubbg-76sUX3VBHFRCwaRwg'; // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);