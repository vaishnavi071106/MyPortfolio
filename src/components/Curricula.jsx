import React from "react";
import {Design_Certificate, JS_Certificate, M1, M2} from "../assets/images";

const Curricula = () => {
  const certificates = [
    {
      title: "Certification of Advanced Programming practice",
      description:
        "I am currently enrolled in the course Advanced Programming Practice (21CSC203P), where I am actively progressing through its structured content. The course is divided into four main units, each containing multiple sub-sections. Based on my current progress visualization, I have completed several segments fully, while some areas still require additional focus. This ongoing engagement is helping me strengthen my skills in advanced programming practices.",
      image: M2,
      imageAlt: "certification",
    },
  ];

  return (
    <div id="hackerrank">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10 mt-10">
        E-Curricula
      </h1>
      <div className="flex flex-wrap justify-between gap-y-5">
        {certificates.map((value, index) => {
          return (
            <div
              className="max-w-base min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-5 cursor-pointer"
              key={index}>
              <img className="w-full" src={value.image} alt={value.imageAlt} />
              <div className="px-4">
                <div className="">
                  <h1 className="font-bold text-xl mb-1 mt-1 text-black flex items-center gap-2">
                    {value.title}{" "}
                    <a
                      href={value.link}
                      className="font-bold text-base mb-1 mt-1 text-black cursor-pointer hover:scale-110"
                      target="_blank"
                      title="Certificate Verification"
                      rel="noreferrer"></a>
                  </h1>
                  <p className="text-gray-700 text-base">{value.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Curricula;
