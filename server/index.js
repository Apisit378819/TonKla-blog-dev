import express from "express";
import cors from "cors";
import { supabase } from "./utils/supabase.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 📌 ตรวจสอบว่าเซิร์ฟเวอร์ทำงานปกติ
app.get("/", (req, res) => {
  res.send("✅ Backend Server is Running!");
});

// 📌 API ดึงข้อมูลจาก Supabase
app.get("/users", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
