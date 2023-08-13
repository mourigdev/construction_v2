import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://besfvontcqytathihzrq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlc2Z2b250Y3F5dGF0aGloenJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MDczMDgsImV4cCI6MjAwNjM4MzMwOH0.6D-rzJ4GUy2ynnaqMvUuPJe192B-xOJyRlHZPmxvfjY';
const Supabase = createClient(supabaseUrl, supabaseKey);

export default Supabase;
