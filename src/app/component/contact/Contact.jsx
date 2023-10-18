"use client";
import axios from "axios";
import { useRef } from "react";
import AnimationWrapper from "../animation-wrapper";

export default function Contact() {
  const from_d3 = useRef(null);
  const from_d1 = useRef(null);
  const from_d2 = useRef(null);

  const data_submit = (e) => {
    e.preventDefault();
    const name1 = from_d1.current.value;
    const name2 = from_d2.current.value;
    const name3 = from_d3.current.value;
    console.log(name1, name2, name3);

    axios.post("http://localhost:3001/contact", {
      name: name1,
      email: name2,
      message: name3,
    })
      .then(() => {
        console.log("Success");
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }


  return (
    <div
      className="w-[100%] pb-[70px] px-20 xl:px-32 mx-auto"
      id="contact"
    >
      <AnimationWrapper className={"py-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"Contact Me".split(" ").map((item, index) => (
              <span
                className={`${index === 1 ? "text-[aqua]" : "text-[#fff]"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
        </div>
      </AnimationWrapper>
      <div className="text-gray-500 relative">
        <div className="container px-5">
          <div className="w-full">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="text-sm text-[#fff]">
                    Name
                  </label>
                  <input ref={from_d1} className="w-full border-[aqua] border-[2px] bg-[#ffffff] rounded  text-base outline-none text-[#000000] py-1 px-3 leading-6"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="text-sm text-[#fff]">
                    Email
                  </label>
                  <input ref={from_d2} className="w-full border-[aqua] border-[2px] bg-[#ffffff] rounded  text-base outline-none text-[#000000] py-1 px-3 leading-6"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="text-sm text-[#fff]">
                    Message
                  </label>
                  <textarea ref={from_d3} className="w-full border-[aqua] border-[2px] bg-[#ffffff] rounded  h-32 text-base outline-none text-[#000000] py-1 px-3 resize-none leading-6"
                  ></textarea>
                </div>
              </div>
              {/* {controls.map((controlItem) =>
                controlItem.name === "message" ? (
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label className="text-sm text-[#fff]">
                        {controlItem.label}
                      </label>
                      <textarea ref={from_d} className="w-full border-[aqua] border-[2px] bg-[#ffffff] rounded  h-32 text-base outline-none text-[#000000] py-1 px-3 resize-none leading-6"
                      ></textarea>
                    </div>
                  </div>
                ) : (
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label className="text-sm text-[#fff]">
                        {controlItem.label}
                      </label>
                      <input ref={from_d1} className="w-full border-[aqua] border-[2px] bg-[#ffffff] rounded  text-base outline-none text-[#000000] py-1 px-3 leading-6"
                      />
                      <input ref={from_d1} className="w-full border-[aqua] border-[2px] bg-[#ffffff] rounded  text-base outline-none text-[#000000] py-1 px-3 leading-6"
                      />
                    </div>
                  </div>
                )
              )} */}
              <div className="p-2 w-full">
                <button onClick={data_submit} className="disabled:opacity-50 py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg text-2xl tracking-widest bg-[aqua] outline-none"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
