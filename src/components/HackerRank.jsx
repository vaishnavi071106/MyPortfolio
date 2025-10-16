import React from "react";
import {Design_Certificate, HackerRankImage, M1, M2} from "../assets/images";

const HackerRank = () => {
  const certificates = [
    {
      title: "Certification of Hackathon",
      description:
        "Participated in Designathon 2025: Crack the Complexity, a National Level 24-hour Hackathon held on 5th and 6th August 2025. The event was organized by the Department of Computational Intelligence, School of Computing, SRM Institute of Science and Technology, Kattankulathur. It provided a great opportunity to apply my problem-solving skills and engage in innovative thinking under real-time pressure.",
      image: HackerRankImage,
      imageAlt: "Lagacy JavaScript Certificate",
    },
  ];

  return (
    <div id="hackerrank">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10 mt-10">
        HackerRank
      </h1>

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

export default HackerRank;
