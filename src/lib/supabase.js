import { createClient } from '@supabase/supabase-js';

// Get environment variables from Astro or fallback
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://coxzzkfdssrgjplstnmo.supabase.co';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_EhBCngvPs468DymzEn1e6g_wvcto6Hs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

/**
 * Sync the current Supabase session to the D1 backend
 */
export async function syncSessionToTelemetry(session, extraData = {}) {
  if (!session) return;
  
  try {
    await fetch('/api/auth/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`
      },
      body: JSON.stringify({
        ...extraData
      })
    });
  } catch (error) {
    console.error('Failed to sync telemetry', error);
  }
}
