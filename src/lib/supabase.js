import { createClient } from '@supabase/supabase-js'

// These should be valid
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug log to check if values are loaded correctly
console.log('Supabase URL:', supabaseUrl ? 'Loaded' : 'Missing')
console.log('Supabase Key:', supabaseAnonKey ? 'Loaded' : 'Missing')

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase