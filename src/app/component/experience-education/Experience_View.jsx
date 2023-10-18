"use client";

import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import { motion } from "framer-motion";
import AnimationWrapper from "../animation-wrapper";

export default function Experience_View() {
    const educationData = [
        {
            id: '64f4a7605cb91600c0ca5f39',
            degree: 'B.Tech',
            year: '2023-2017',
            college: 'ABC College of engineering',
            createdAt: '2023-09-03T15:33:52.674Z'
        },
        {
            id: '64f4a7665cb91600c0ca5f3b',
            degree: 'B.Tech',
            year: '2023-2017',
            college: 'ABC College of engineering',
            createdAt: '2023-09-03T15:33:58.905Z'
        },
        {
            id: '64fb003f0bb84a1feb6f9371',
            degree: 'MSc',
            year: '2019-2021',
            college: 'Dummy College',
            createdAt: '2023-09-08T11:06:39.273Z'
        }
    ];
    const experienceData = [
        {
            _id: '64f4a71f5cb91600c0ca5f35',
            position: 'dummy position',
            company: 'Google',
            duration: '2020-2023',
            location: 'India',
            jobprofile: "Software developer",
        },
        {
            _id: '64fafffc0bb84a1feb6f9360',
            position: 'Web Developer',
            company: 'Amazon',
            duration: '2023-Present',
            location: 'India',
            jobprofile: "Software developer",
        },
        {
            _id: '64fb00270bb84a1feb6f936d',
            position: 'Software Developer',
            company: 'Meta',
            duration: '2023-Present',
            location: 'USA',
            jobprofile: "Software developer",
        },
        {
            _id: '64fb21c88db0f76cd7496c7d',
            position: 'Software Manager',
            company: 'Amazon',
            duration: '2020 - 2023',
            location: 'USA',
            jobprofile: "Software developer",
        },
        {
            _id: '6507f89cff73744fcb25babd',
            position: 'qqq',
            company: 'qweqwe',
            duration: 'qweqwe',
            location: 'qweqwe',
            jobprofile: "Software developer",
        }
    ];


    return (
        <div
            className="w-[100%] bg-[#00000061] pb-[50px] mb-6  sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="experience"
        >
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-5">
                    <AnimationWrapper className={"py-6 sm:py-16"}>
                        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                            <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                                {"My Experince".split(" ").map((item, index) => (
                                    <span
                                        className={`${index === 1 ? "text-[aqua]" : "text-[#fff]"
                                            }`}
                                    >
                                        {item}{" "}
                                    </span>
                                ))}
                            </h1>
                        </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                        <div className="flex w-full text-white">
                            <motion.div className="container ">
                                <Timeline className="">
                                    {experienceData && experienceData.length
                                        ? experienceData.map((experienceItem) => (
                                            <TimelineItem className=" w-[100%]">
                                                <div className="flex flex-col space-y-2 items-center py-2">
                                                    <div className="bg-[aqua] w-3 h-3 rounded-full"></div>
                                                    <div className="bg-[aqua] w-[2px] h-full"></div>
                                                </div>
                                                <div className="border-[2px] w-[100%] p-4 rounded-[8px] border-[aqua] mt-[14px] ml-[16px]">
                                                    <p className="font-bold">
                                                        {experienceItem.duration}
                                                    </p>
                                                    <h3 className="font-extrabold mt-2">
                                                        {experienceItem.company},{" "}
                                                        {experienceItem.location}
                                                    </h3>
                                                    <p className="font-extrabold mt-2">
                                                        {experienceItem.position}
                                                    </p>
                                                    <p className=" mt-2">
                                                        {experienceItem.jobprofile}
                                                    </p>
                                                </div>
                                            </TimelineItem>
                                        ))
                                        : null}
                                </Timeline>
                            </motion.div>
                        </div>
                    </AnimationWrapper>
                </div>
                <div className="flex flex-col gap-5">
                    <AnimationWrapper className={"py-6 sm:py-16"}>
                        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                            <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                                {"My Education".split(" ").map((item, index) => (
                                    <span
                                        className={`${index === 1 ? "text-[aqua]" : "text-[#fff]"
                                            }`}
                                    >
                                        {item}{" "}
                                    </span>
                                ))}
                            </h1>
                        </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                        <div className="flex w-full text-white">
                            <motion.div className="container">
                                <Timeline position="right">
                                    {educationData && educationData.length
                                        ? educationData.map((educationItem) => (
                                            <TimelineItem>
                                                <div className="flex flex-col space-y-2 items-center py-2">
                                                    <div className="bg-[aqua] w-3 h-3 rounded-full"></div>
                                                    <div className="bg-[aqua] w-[2px] h-full"></div>
                                                </div>
                                                
                                                    <div className="border-[2px] w-[100%] p-4 rounded-[8px] border-[aqua] mt-[14px] ml-[16px]">
                                                        <p className="font-bold">
                                                            {educationItem.year}
                                                        </p>
                                                        <h3 className="font-extrabold mt-2">
                                                            {educationItem.college}
                                                        </h3>
                                                        <p className="font-extrabold mt-2">
                                                            {educationItem.degree}
                                                        </p>
                                                    </div>
                                            </TimelineItem>
                                        ))
                                        : null}
                                </Timeline>
                            </motion.div>
                        </div>
                    </AnimationWrapper>
                </div>
            </div>
        </div>
    );
}
