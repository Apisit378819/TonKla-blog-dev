import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ✅ กำหนดพาธให้ชัดเจน เพื่อให้โหลด .env ได้แน่นอน
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../.env") });

console.log("🔍 SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("🔍 SUPABASE_KEY:", process.env.SUPABASE_KEY ? "✅ Loaded" : "❌ Missing Key");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("❌ Missing Supabase URL or Key. Check your .env file!");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
