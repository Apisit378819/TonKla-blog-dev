import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { supabase } from "./utils/supabase.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ Backend Server is Running!");
});

// ✅ ดึงข้อมูลทั้งหมดจากตาราง `posts`
app.get("/test", async (req, res) => {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
});
// console.log("🔍 ENV CHECK: PORT =", process.env.PORT);
// console.log("🔍 ENV CHECK: SUPABASE_URL =", process.env.SUPABASE_URL);
// console.log("🔍 ENV CHECK: SUPABASE_KEY =", process.env.SUPABASE_KEY ? "✅ Loaded" : "❌ Missing");

app.get("/test/:id", async (req, res) => {
  const { id } = req.params; 

  // ดึงข้อมูลจาก Supabase
  const { data, error } = await supabase.from("posts").select("content").eq("id", id).single();

  if (error || !data) return res.status(404).json({ error: "Post not found" });

  let fixedContent = data.content;

  // ✅ ลองใช้ JSON.parse() ถ้า API ส่ง `\\n`
  try {
    fixedContent = JSON.parse(fixedContent);
  } catch (e) {
    console.log("🔍 Content is already a normal string");
  }

  console.log("🔍 Fixed Content:", fixedContent); // ตรวจสอบค่าหลังแปลง

  res.json({ ...data, content: fixedContent });
});




app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
