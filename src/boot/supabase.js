import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://elmgrmfhtrlapdebmhke.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsbWdybWZodHJsYXBkZWJtaGtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgwMDk4MjgsImV4cCI6MTk4MzU4NTgyOH0.Fi0rByIqg_8Mcm9krMM1CHFc0ZvEWxNIMc8mYAsqRPg'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})
console.log('init supabase:', supabase)

export default function useSupabase () {
  return { supabase }
}
