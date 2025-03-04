"use client";
import Image from "next/image";

const About = () => {
  const downloadCV = () => {
    const pdfUrl = "/Deepak_Singh_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Deepak_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="flex flex-col items-center mb-8 bg-white ">
      <div className="z-1 md:h-48 md:w-48 h-32 w-32 mx-auto md:mt-[-6rem] mt-[-4rem]">
        <Image
          src="/myphoto.jpg"
          alt="My Picture"
          width={200}
          height={200}
          className="h-full w-full object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      <div className="p-2.5 md:w-1/2 w-[90%] text-justify text-gray-600 md:text-lg text-sm">
        Skilled Web Developer with 4.2 years of experience in developing
        responsive web applications that enhances user experience. With a strong
        foundation in web technologies I focus on building clean, efficient, and
        scalable code. I'm always eager to learn and keep up with the latest
        trends.
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          className="px-4 py-2 rounded  border-2 cursor-pointer md:text-lg text-sm text-[#eb822d]"
          onClick={downloadCV}
        >
          Download My CV
        </button>
      </div>
    </section>
  );
};

export default About;
