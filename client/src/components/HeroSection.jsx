import TK from '../assets/TK.jpg';
export function HeroSection() {
    return (
      <main className="container px-4 py-8 lg:py-16 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Get started with simple coding for beginners
            </h1>
            <p className="text-lg text-gray-500">
            This blog is designed to help everyone understand the basics of coding in a fun and relevant way. We have in-depth articles that are perfect for beginners, with detailed examples and tips to help you become a future software developer.
            </p>
          </div>
          <img
            className="w-full h-[530px] object-cover rounded-lg shadow-lg mx-4 mb-8 lg:w-1/3  lg:mb-0"
            src={TK}
            alt=""
          />
          <div className="lg:w-1/3 lg:pl-8">
            <h2 className="text-xl font-semibold mb-2">Author</h2>
            <h3 className="text-2xl font-bold mb-4">Apisit Kanna</h3>
            <p className="text-gray-500 mb-4">
            In terms of soft content, starting from How the Digital World Works Today, the content that will become the starting point for learning how I develop problem-solving skills, project knowledge, and others through articles and teaching.
            </p>
          </div>
        </div>
      </main>
    );
  }