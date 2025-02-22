import { Search } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { ContentBox } from "./Content.jsx";
import axios from "axios";
// import ReactLoading from 'react-loading';
import { Spain } from "./UI/Spain";
import { useNavigate } from "react-router-dom";


export function SearchBar() {
  const [category, setcategory] = useState("Highlight");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postView, setPostView] = useState(6);
  const [search, setSearch] = useState("");

  console.log(posts);

  const navigate = useNavigate()
  const viewPostPageClik = (id) => {
    navigate(`/View/${id}`)
  }

  const SearchInput = (event) => {
    setSearch(event.target.value)
    console.log(search)
  };

  const postViewPush = () => {
    setPostView(postView + 2);
    console.log(loading);
  };

  useEffect(() => {
    fetchPosts();
  }, [postView , search]);


  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://ton-kla-blog-dev-sever.vercel.app/test");
      // const response = await axios.get("http://localhost:3000/test");
      setPosts(response.data);
      // หลังจากดึงข้อมูลจาก Api มาแล้วก็ใช้ setPosts ดึงข้อมูลให้ posts ไปใช้ต่อ
      setLoading(false);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  const Highlight = () => {
    setcategory("Highlight");
  };
  const Cat = () => {
    setcategory("Cat");
  };
  const Inspiration = () => {
    setcategory("Inspiration");
  };
  const General = () => {
    setcategory("General");
  };
  return (
    <div className="lg:container lg:px-4  lg:py-16 lg:mx-auto">
      <div className="text-2xl py-2 px-8 font-semibold mb-2">
        <h1>Latest articles</h1>
      </div>
      <div className="flex-col py-4 px-8 bg-[#EFEEEB] lg:flex lg:flex-row lg:justify-between">
        <div className="lg:flex lg:flex-row items-center lg:justify-between lg:w-1/3 hidden">
          <button
            className={`p-2 rounded-2xl ${
              category === "Highlight" ? "bg-[#DAD6D1]" : "hover:bg-[#DAD6D1]"
            }`}
            onClick={Highlight}
          >
            Highlight
          </button>
          <button
            className={`p-2 rounded-2xl ${
              category === "Cat" ? "bg-[#DAD6D1]" : "hover:bg-[#DAD6D1]"
            }`}
            onClick={Cat}
          >
            Cat
          </button>
          <button
            className={`p-2 rounded-2xl ${
              category === "Inspiration" ? "bg-[#DAD6D1]" : "hover:bg-[#DAD6D1]"
            }`}
            onClick={Inspiration}
          >
            Inspiration
          </button>
          <button
            className={`p-2 rounded-2xl ${
              category === "General" ? "bg-[#DAD6D1]" : "hover:bg-[#DAD6D1]"
            }`}
            onClick={General}
          >
            General
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pt-2 pr-2 pb-2 pl-3 rounded-lg w-full lg:w-80"
            onChange={SearchInput}
          />
          <Search className="absolute right-3 top-2 size-5" />
        </div>
        <h3 className="lg:hidden">Category</h3>
        <select
          className="pt-2 pr-2 pb-2 pl-3 rounded-lg w-full lg:w-80 lg:hidden"
          value={category}
          onChange={(event) => setcategory(event.target.value)}
        >
          <option value="Highlight">Highlight</option>
          <option value="Cat">Cat</option>
          <option value="Inspiration">Inspiration</option>
          <option value="General">General</option>
        </select>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:container lg:mx-auto">
        {category === "Highlight"
          ? posts.map((item) => {
              return (
                <div key={item.id}>
                <ContentBox
                  Detailsimage={item.image}
                  Detailscategory={item.category}
                  Detailstitle={item.title}
                  DetailsDescription={item.description}
                  Detailcontent={item.content}
                  Detailsauthor={item.author}
                  Detailsdate={item.date}
                  DetailsId={item.id}
                  viewPostPage={viewPostPageClik}
                />
                </div>
              );
            })
          : posts.map((item) => {
              return (
                item.category === category && (
                  <div key={item.id}>
                  <ContentBox
                    Detailsimage={item.image}
                    Detailscategory={item.category}
                    Detailstitle={item.title}
                    DetailsDescription={item.description}
                    Detailcontent={item.content}
                    Detailsauthor={item.author}
                    Detailsdate={item.date}
                    DetailsId={item.id}
                    viewPostPage={viewPostPageClik}
                  />
                  </div>
                )
              );
            })}
      </div>
      <div className="w-auto flex justify-center items-center">
      {loading ? <Spain/> : <button  onClick={postViewPush}>ViewMore</button>}
      </div>
    </div>
  );
}
