import { createClient } from '@supabase/supabase-js'

 const supabaseUrl = 'https://ezbyocbmzlsenkqvugpp.supabase.co'
 const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6YnlvY2JtemxzZW5rcXZ1Z3BwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxMTQxMjgsImV4cCI6MjAwOTY5MDEyOH0.frf7oZIwXTjuFr-o6RCVosA5zKtYKk7XrQbeV_bvOBY'
 export const supabase = createClient(supabaseUrl, supabaseKey)
