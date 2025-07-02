import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ywkoklzxhhonnzuuilir.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3a29rbHp4aGhvbm56dXVpbGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NDgwODUsImV4cCI6MjA2NzAyNDA4NX0.PRNGMRb-VYPqhAoXCdomKb41L4P-X2Q0MZ-ALyTycgE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 