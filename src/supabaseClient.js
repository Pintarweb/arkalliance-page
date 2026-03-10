import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yyhutvpcvpachpspgmbe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5aHV0dnBjdnBhY2hwc3BnbWJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNjY1MTcsImV4cCI6MjA4NTc0MjUxN30.6Jk3gV2zTAQTH5dzipEZpo-x0TOouZYSQyXT8AiIRrI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
