import { Sparkle, Github, Laugh } from "lucide-react";
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