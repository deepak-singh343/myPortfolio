"use client";
import { FaChalkboardUser } from "react-icons/fa6";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { skillData } from "@/constants/constants";

const Skills = () => (
  <section
    id="skills"
    className="w-full flex flex-col items-center pb-5 bg-gray-100"
  >
    <h1 className="flex justify-between items-center gap-4 m-8 text-4xl font-normal">
      <span className=" text-[#2857a4]">
        <FaChalkboardUser />
      </span>
      <span className="text-[#2857a4]">SKILLS</span>
    </h1>
    <div className="md:w-[80%] w-[90%]">
      <Swiper
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000}
        slidesPerView="auto"
        spaceBetween={20}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {skillData &&
          skillData.map((skill, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center md:min-w-[120px] md:min-h-[120px] w-[80px] h-[80px]">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="object-contain md:h-[80px] md:w-[80px] h-[40px] w-[40px]"
                />
                <div className="mt-2 md:text-lg text-sm text-center">
                  {skill.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  </section>
);

export default Skills;
