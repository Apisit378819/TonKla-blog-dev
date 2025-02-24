import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer"; // ใช้สำหรับจัดการไฟล์อัปโหลด
import { supabase } from "./utils/supabase.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ เช็คว่าตัวเซิร์ฟเวอร์ทำงานอยู่
app.get("/", (req, res) => {
  res.send("✅ Backend Server is Running!");
});

// ✅ ดึงข้อมูลทั้งหมดจากตาราง `posts`
app.get("/posts", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select(`
        id, title, image, content, date, category_id, 
        categories ( name )
      `); // ✅ JOIN `categories` โดยใช้ `()` ล้อมชื่อ

    if (error) {
      console.error("🔴 Error fetching posts:", error.message);
      return res.status(500).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    console.error("🔴 Server Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ ดึงข้อมูลเฉพาะ ID
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("posts").select("*").eq("id", id).single();

  if (error || !data) return res.status(404).json({ error: "Post not found" });

  res.json(data);
});

// ✅ ตั้งค่าการอัปโหลดไฟล์ (ใช้ Multer)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ อัปโหลดรูปภาพไปยัง Supabase Storage
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileName = `${Date.now()}-${req.file.originalname}`;
    const { data, error } = await supabase.storage
      .from("images") // ใช้ชื่อ Bucket "images"
      .upload(fileName, req.file.buffer, {
        contentType: req.file.mimetype,
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // ✅ ดึง URL ของรูปที่อัปโหลดสำเร็จ
    const { data: publicUrl } = supabase.storage.from("images").getPublicUrl(fileName);

    res.json({
      message: "Upload successful",
      imageUrl: publicUrl.publicUrl,
    });
  } catch (error) {
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
});

// ✅ Start Server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
