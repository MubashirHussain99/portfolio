// Create a new component called ClientProjectView.js
"use client"
import { useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ClientProjectView() {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const router = useRouter();

  const data = [
    {
      name: "Project 1",
      createdAt: "2023-01-15T10:30:00",
      technologies: "React, Node.js, Express",
      website: "https://example.com/project1",
      github: "https://github.com/project1",
    },
    {
      name: "Project 2",
      createdAt: "2023-02-20T14:45:00",
      technologies: "Vue.js, MongoDB, Express",
      website: "https://example.com/project2",
      github: "https://github.com/project2",
    },
    {
      name: "Project 3",
      createdAt: "2023-03-10T09:15:00",
      technologies: "Angular, Java, Spring Boot",
      website: "https://example.com/project3",
      github: "https://github.com/project3",
    },
    {
        name: "Project 1",
        createdAt: "2023-01-15T10:30:00",
        technologies: "React, Node.js, Express",
        website: "https://example.com/project1",
        github: "https://github.com/project1",
      },
      {
        name: "Project 2",
        createdAt: "2023-02-20T14:45:00",
        technologies: "Vue.js, MongoDB, Express",
        website: "https://example.com/project2",
        github: "https://github.com/project2",
      },
      {
        name: "Project 3",
        createdAt: "2023-03-10T09:15:00",
        technologies: "Angular, Java, Spring Boot",
        website: "https://example.com/project3",
        github: "https://github.com/project3",
      },
    // Add more projects as needed
  ];
  
  return (
    <div
      className="w-[100%] bg-black py-24 px-20 xl:px-32 mx-auto"
      id="project"
    >
      <AnimationWrapper className={"py-6 sm:py-16"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"My Projects".split(" ").map((item, index) => (
              <span
                className={`${index === 1 ? "text-[aqua]" : "text-[#fff]"}`}
                key={index}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
          
        </div>
      </AnimationWrapper>
      <AnimationWrapper>
        <ul className="project-wrapper grid md:grid-cols-3 sm:grid-cols-2 gap-5" ref={containerRef}>
          {data && data.length
            ? data.map((item, index) => (
                <li
                  className="h-[380px] flex items-stretch cursor-pointer"
                  key={index}
                >
                  <div className="border-2 w-full relative border-[aqua] transition-all rounded-lg flex flex-col">
                    <div className="flex p-4 flex-col xl:flex-row w-full items-stretch xl:items-center">
                      <div className="flex order-2 xl:order-1">
                        <div className="flex flex-col space-y-3">
                          <h3 className="text-3xl text-white capitalize font-extrabold">
                            {item.name}
                          </h3>
                          <div className="pl-6"><img src="/p1.png" width={300} className="border" alt="" /></div>
                          <div className="grid gap-2 mt-5 grid-cols-2 h-full max-h-[200px] w-full">
                            {item?.technologies.split(",").map((techItem) => (
                              <div className="w-full flex justify-start items-center" key={techItem}>
                                <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[120px]  px-6 border-[2px] border-[aqua] bg-[#fff] text-[#000] font-semibold rounded-lg text-xs tracking-widest hover:shadow-[aqua] transition-all outline-none">
                                  {techItem}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-full bottom-0 justify-center flex gap-2">
                      <button onClick={() => router.push(item.website)} className="p-2 text-white-500 font-semibold text-[14px] tracking-widest bg-[aqua] transition-all outline-none">
                        Website
                      </button>
                      <button onClick={() => router.push(item.github)} className="p-2 text-white-500 font-semibold text-[14px] tracking-widest bg-[aqua] transition-all outline-none">
                        Github
                      </button>
                    </div>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </AnimationWrapper>
    </div>
  );
}
