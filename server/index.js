import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { supabase } from "./utils/supabase.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ ดึงข้อมูลทั้งหมดจากตาราง `posts`
app.get("/test", async (req, res) => {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
});
console.log("🔍 ENV CHECK: PORT =", process.env.PORT);
console.log("🔍 ENV CHECK: SUPABASE_URL =", process.env.SUPABASE_URL);
console.log("🔍 ENV CHECK: SUPABASE_KEY =", process.env.SUPABASE_KEY ? "✅ Loaded" : "❌ Missing");

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
