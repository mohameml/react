
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bzmstybjiyifxxxyrwkg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6bXN0eWJqaXlpZnh4eHlyd2tnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MDc0NDQsImV4cCI6MjA2NDE4MzQ0NH0.6wZD0HYONIkB2VJHlFiTagPxcPvNL2BcjK5hwEie388"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;