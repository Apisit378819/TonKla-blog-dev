import { Sparkle, Github, Laugh, Search } from "lucide-react";
import blogPosts from "../data/blogPosts";
import { useState } from "react";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white border-b">
      <a href="#" className="text-gray-900">
        hh.
      </a>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="px-9 py-2  rounded-full border">
          Login
        </a>
        <a
          href="#"
          className="px-8 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          Sign up
        </a>
      </div>
    </nav>
  );
}
export function HeroSection() {
  return (
    <main className="container px-4 py-8 lg:py-16 mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Stay <br className="hidden lg:block" />
            Informed, <br />
            Stay Inspired,
          </h1>
          <p className="text-lg text-gray-500">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <img
          className="w-full h-[530px] object-cover rounded-lg shadow-lg mx-4 mb-8 lg:w-1/3  lg:mb-0"
          src="https://st2.depositphotos.com/3904951/8925/v/380/depositphotos_89250312-stock-illustration-photo-picture-web-icon-in.jpg"
          alt=""
        />
        <div className="lg:w-1/3 lg:pl-8">
          <h2 className="text-xl font-semibold mb-2">-Author</h2>
          <h3 className="text-2xl font-bold mb-4">Thompson P.</h3>
          <p className="text-gray-500 mb-4">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="text-gray-500">
            When I&apos;m not writing, I spend time volunteering at my local
            animal shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </main>
  );
}
export function SearchBar() {
  const [data, setData] = useState(blogPosts);
  const [category, setcategory] = useState();
  console.log(category);
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
        ? data.map((item) => {
            return (
              <ConteanBox
                Detailsimage={item.image}
                Detailscategory={item.category}
                Detailstitle={item.title}
                DetailsDescription={item.description}
                Detailsauthor={item.author}
                Detailsdate={item.date}
              />
            );
          })
        : data.map((item) => {
            return item.category === category  && (
              <ConteanBox
                Detailsimage={item.image}
                Detailscategory={item.category} 
                Detailstitle={item.title}
                DetailsDescription={item.description}
                Detailsauthor={item.author}
                Detailsdate={item.date}
              />
            );
          })}
    </div>
    </div>
  );
}
export function ConteanBox({
  Detailsimage,
  Detailscategory,
  Detailstitle,
  DetailsDescription,
  Detailsauthor,
  Detailsdate,
}) {
  return (
    <>
        <div className="sm:w-3/4 lg:w-full mx-auto">
          <div className="container flex flex-col items-center  px-4 py-4 ">
            <img
              src={Detailsimage}
              alt=""
              className="w-full h-[212px] object-cover rounded-lg shadow-lg mx-4 mb-8 lg:h-[360px] "
            />
            <div>
              <div className="w-14 h-8 px-3 py-1 rounded-full bg-[#D7F2E9]">
                <p className="text-[#12B279] font-medium">{Detailscategory}</p>
              </div>
              <a href="#" className="text-xl font-semibold">
                {Detailstitle}
              </a>
              <p className="text-gray-500 my-2">{DetailsDescription}</p>
              <div className="flex items-center justify-between w-[285px]">
                <div className="flex">
                  <img
                    src="https://st2.depositphotos.com/3904951/8925/v/380/depositphotos_89250312-stock-illustration-photo-picture-web-icon-in.jpg"
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                  <p>{Detailsauthor}</p>
                </div>
                <p>{Detailsdate}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
export function Footer() {
  return (
    <footer className="bg-[#EFEEEB] p-8 flex flex-col items-center ">
      <div className="lg:flex lg:flex-row lg:justify-between lg:container lg:px-4 ">
        <div className="flex justify-between items-center w-80 gap-6 ">
          <span className="font-medium">Get in touch</span>
          <a href="#">
            <Sparkle />
          </a>
          <a href="#">
            {" "}
            <Github />
          </a>
          <a href="#">
            <Sparkle />
          </a>
        </div>
        <a
          href="#"
          className="hover:text-muted-foreground font-medium underline pt-6 "
        >
          Home page
        </a>
      </div>
    </footer>
  );
}
