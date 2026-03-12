import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// ---------- helpers ----------

/** true when both env vars look valid */
export const isSupabaseConfigured =
  !!supabaseUrl &&
  !!supabaseAnonKey &&
  supabaseUrl !== "your-supabase-project-url-here" &&
  supabaseAnonKey !== "your-supabase-anon-key-here";

// Lazy-initialize the client so a missing URL never crashes the app on load.
let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (_client) return _client;

  if (!isSupabaseConfigured) {
    console.warn(
      "⚠️ Supabase is not configured!\n" +
        "Please update your .env.local file with:\n" +
        "  VITE_SUPABASE_URL=https://your-project.supabase.co\n" +
        "  VITE_SUPABASE_ANON_KEY=eyJ...\n\n" +
        "Get these from: Supabase Dashboard → Settings → API\n" +
        "The booking form will still render, but data won't be saved until this is fixed."
    );

    // Return a dummy client that always rejects – this prevents import-time crashes
    // while still giving a clear error if someone tries to use it.
    return new Proxy({} as SupabaseClient, {
      get(_target, prop) {
        if (prop === "from") {
          return () => ({
            insert: async () => ({
              error: { message: "Supabase is not configured. Check .env.local" },
              data: null,
            }),
            select: async () => ({
              error: { message: "Supabase is not configured. Check .env.local" },
              data: null,
            }),
          });
        }
        return () => {};
      },
    });
  }

  try {
    _client = createClient(supabaseUrl, supabaseAnonKey);
    return _client;
  } catch (err) {
    console.error("Failed to initialize Supabase client:", err);
    throw err;
  }
}

/** The Supabase client – safe to import without crashing the app. */
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop, receiver) {
    const client = getClient();
    const value = Reflect.get(client, prop, receiver);
    return typeof value === "function" ? value.bind(client) : value;
  },
});
