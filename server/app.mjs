import express from "express";
import cors from "cors"; // ✅ Import CORS Middleware
import supabase from "./utils/supabase.js";

const app = express();
const PORT = 3000;

// ✅ ใช้ CORS Middleware
app.use(cors({
  // origin: "http://localhost:5173", // ✅ อนุญาตให้ React เรียก API ได้
  // methods: "GET,POST,PUT,DELETE",
  // allowedHeaders: "Content-Type,Authorization"
}));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/test", async (req, res) => {
  try {
    // ✅ ดึงข้อมูลจาก Supabase
    const { data, error } = await supabase.from("posts").select("*");

    if (error) throw error; // ถ้ามี error ให้โยนออกไป

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: error.message });
  }
});

// ✅ เพิ่ม route ที่รับ id เป็น parameter
app.get("/test/:id", async (req, res) => {
  try {
    const { id } = req.params; // ดึงค่า id จาก URL

    // ✅ ดึงข้อมูลจาก Supabase โดยใช้ id
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id) // ใช้เงื่อนไข where เพื่อหาข้อมูลที่ตรงกับ id
      .single(); // ใช้ single() เพื่อให้ได้ผลลัพธ์เพียง 1 record

    if (error) throw error; // ถ้ามี error ให้โยนออกไป

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});