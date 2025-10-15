import React from "react";
import {Design_Certificate, JS_Certificate, M1, M2} from "../assets/images";
import {FaExternalLinkAlt} from "react-icons/fa";

const Certificates = () => {
  const certificates = [
    {
      title: "Certification of NPTEL Programming in Java",
      description:
        "I am currently pursuing the NPTEL course Programming in Java via the SWAYAM platform, enrolled on 28th July 2025. I have successfully completed 70.76% of the course so far, achieving a perfect score (100/100) in multiple programming assignments, especially in Week 7 and Week 8. This reflects my strong understanding of Java programming concepts and consistent performance throughout the course.",
      image: M1,
      imageAlt: "certification",
    },
    {
      title: "Certification of Advanced Programming practice",
      description:
        "I am currently enrolled in the course Advanced Programming Practice (21CSC203P), where I am actively progressing through its structured content. The course is divided into four main units, each containing multiple sub-sections. Based on my current progress visualization, I have completed several segments fully, while some areas still require additional focus. This ongoing engagement is helping me strengthen my skills in advanced programming practices.",
      image: M2,
      imageAlt: "certification",
    },
    {
      title: "Certification of workshop",
      description:
        "Participated in a Two Days Capacity Building Workshop on 'Bridging your Dreams and Reality' held on 13th and 14th August 2025. The workshop was organized by the Department of Computing Technologies, School of Computing, SRM Institute of Science and Technology (SRMIST). It was a valuable experience guided by esteemed faculty members, including professors and department heads, who also endorsed the participation with their signatures.",
      image: Design_Certificate,
      imageAlt: "certification",
    },
    {
      title: "Certification of Hackathon",
      description:
        "Participated in Designathon 2025: Crack the Complexity, a National Level 24-hour Hackathon held on 5th and 6th August 2025. The event was organized by the Department of Computational Intelligence, School of Computing, SRM Institute of Science and Technology, Kattankulathur. It provided a great opportunity to apply my problem-solving skills and engage in innovative thinking under real-time pressure.",
      image: JS_Certificate,
      imageAlt: "Lagacy JavaScript Certificate",
    },
  ];

  return (
    <div id="certificates">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Certificates</h1>

      <div className="flex flex-wrap justify-between gap-y-5">
        {certificates.map((value, index) => {
          return (
            <div
              className="max-w-base min-[500px]:w-[49%] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-5 cursor-pointer"
              key={index}>
              <img
                className="w-full"
                src={value.image}
                alt={value.imageAlt}
                style={{height: "60vh"}}
              />
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

export default Certificates;
