import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://pjkbipdjxxxzjiuyfkaq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_G7uvRyHNLSew2HKJY_h6ag_M2NZDYx4";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
