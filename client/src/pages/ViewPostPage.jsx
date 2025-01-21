import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { Toaster, toast } from "sonner";
import { Facebook, Linkedin, Twitter, Smile, Copy, Check } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/pages/ui/avatar";
import { Button } from "@/pages/ui/button";
import { Textarea } from "@/pages/ui/textarea";
import { Separator } from "@/pages/ui/separator";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export function PostPage() {
  const [dataPostpage, setDataPostPage] = useState([]);
  const [copied, setCopied] = useState(false);
  const [comment, setComment] = useState("");

  const copyToClipboard = () => {

    const url = window.location.href; // URL of the current page
    console.log(url);

    navigator.clipboard.writeText(url)
      .then(() => toast("Copied!", {
        description: "This article has been copied to your clipbord",
        action: {
          label: "Undo",

        }, style: {
          background: 'rgb(128,128,128)',
          color: 'white',

        },
      }))
      .catch(() => toast('Failed to copy URL'));
  };
  console.log(dataPostpage);

  const param = useParams();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${param.id}`
      );
      setDataPostPage(response.data);
      // console.log(response.data)
      // หลังจากดึงข้อมูลจาก Api มาแล้วก็ใช้ setPosts ดึงข้อมูลให้ posts ไปใช้ต่อ
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <NavBar/>
    <div className=" container lg:px-8 mx-auto">
      <img src={dataPostpage.image} alt="" className=" w-full object-cover h-[500px]" />
      <div className=" flex flex-col px-4 py-4">
        <div className="w-14 h-8 px-3 py-1 rounded-full bg-[#D7F2E9]">
          <p className="text-[#12B279] font-medium">{dataPostpage.category}</p>
        </div>
        <h1>{dataPostpage.title}</h1>
        <p>{dataPostpage.description}</p>
        <div className="markdown">
          <Markdown>{dataPostpage.content}</Markdown>
        </div>
        <div>
          <img src="" alt="" className="w-6 h-6 rounded-full" />
          <p>{dataPostpage.author}</p>
          <div>
            <p></p>
          </div>
        </div>
        <div>
          <Toaster />
          <button onClick={() => toast("My first toast")}>
            Give me a toast
          </button>
        </div>
        <div className="p-4 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Smile className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">321</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={copyToClipboard}

              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                Copy link
              </Button>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white"
                >
                  <Facebook className="w-4 h-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white"
                >
                  <Twitter className="w-4 h-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
              </div>
            </div>
          </div>
          <Separator />

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Comment</h2>
            <div className="space-y-4">
              <Textarea
                placeholder="What are your thoughts?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-[100px]"
              />
              <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                Send
              </Button>
            </div>

            <div className="pt-6">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage alt="Jacob Lash" src="/placeholder.svg" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Jacob Lash</span>
                    <span className="text-sm text-muted-foreground">
                      12 September 2024 at 18:30
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    I loved this article! It really explains why my cat is so
                    independent yet loving. The purring section was super
                    interesting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}
