import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || 'https://sncyaknsmezetvvocmmf.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuY3lha25zbWV6ZXR2dm9jbW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NDkwMjIsImV4cCI6MjA5MTEyNTAyMn0.OPmqxNJM6umE2mzwmfaze-gtnMTFqM167Mbuf1DDbc8';

export const supabase = createClient(supabaseUrl, supabaseKey);
