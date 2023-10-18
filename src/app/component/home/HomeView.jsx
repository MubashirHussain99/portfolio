"use client";

import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import aiImage from "../../../assets/ai-image.png";
import AnimationWrapper from "../animation-wrapper";

function variants() {
    return {
        offscreen: {
            y: 150,
            opacity: 0,
        },
        onscreen: ({ duration = 2 } = {}) => ({
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration,
            },
        }),
    };
}

const socialIcons = [
    {
        id: "facebook",
        icon: (
            <FaFacebookF
                color="#375ca0"
                className="w-[30px] h-[30px] "
            />
        ),
    },
    {
        id: "twitter",
        icon: (
            <FaTwitter color="#2daae4" className="w-[30px] h-[30px] " />
        ),
    },
    {
        id: "linkedin",
        icon: (
            <FaLinkedinIn
                color="#1b63af"
                className="w-[30px] h-[30px] "
            />
        ),
    },
    {
        id: "instagram",
        icon: (
            <FaInstagram
                color="#e33d84"
                className="w-[30px] h-[30px] "
            />
        ),
    },
];

export default function HomeView() {

    const setVariants = useMemo(() => variants(), []);
    const containerRef = useRef(null);

    return (
        <div className="w-[100%] bg-black mt-[80px] px-20 xl:px-32 mx-auto  text-white" id="home">
            <AnimationWrapper>
                <motion.div
                    className={
                        "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
                    }
                    variants={setVariants}
                >
                    <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                        <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
                            <span className="text-[aqua]"><span className=" text-[#ffffff]">Hi I'm</span><br /> Mubashir Hussain</span>
                        </h1>
                        <p className="text-[#fff] mt-4 mb-8 font-bold">
                            A creative software developer. I've been helping businesses to solve their problem with my work for 10+ weeks.
                        </p>
                        <motion.div className="flex gap-3 cursor-pointer space-x-4 ">
                            {socialIcons.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ scale: 0 }}
                                    animate={{ rotate: 360, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 80,
                                        duration: 4,
                                    }}
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">{item.icon}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <motion.div ref={containerRef} className="flex w-full justify-end">
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            className="w-[400px] h-[400px] relative bg-[aqua]"
                        >
                            <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[aqua] absolute"></div>

                            <div className="w-[400px] h-[400px] relative overflow-hidden">
                                <Image
                                src={aiImage}
                                alt="Profile Picture"
                                layout="responsive"
                                quality={100}
                                className="absolute top-[-15px]"
                            /></div>
                            
                        </motion.div>
                    </motion.div>
                </motion.div>
            </AnimationWrapper>
        </div>
    );
}
