/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
const header = () => {
  const [accordion, setAccordion] = useState(true);

  const openAccordion = () => {
    setAccordion(!accordion);
  };
  return (
    <div
      className="flex flex-row-3 gap-5 justify-between items-center bg-linear-to-r/increasing from-indigo-500 to-teal-400 lg:w-full md:w-full sm:w-full  lg:h-40 md:h-40 sm:h-40 h-40 w-full      
      p-2"
    >
      <video className="h-50 w-74 object-cover mt-4" autoPlay loop muted>
        <source src="routine.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-row-3 gap-5 font-serif">
        <div>
          <h2 className="text-black text-center hover:text-[#9C27B0]">Home</h2>
        </div>
        <div onClick={openAccordion}>
          <h2 className="text-black text-center hover:text-[#9C27B0]">
            Daily Records
          </h2>

          {!accordion && (
            <div className="bg-[#9C27B0] rounded-xl p-2">
              <h2 className="text-black text-center hover:text-[#9C27B0]">
                Today routine
              </h2>
              <h2 className="text-black text-center hover:text-[#9C27B0]">
                Yesterday routine
              </h2>
              <h2 className="text-black text-center hover:text-[#9C27B0]">
                Custom routine
              </h2>
            </div>
          )}
        </div>
        <div>
          <Link
            href="notes"
            className="text-black text-center hover:text-[#9C27B0]"
          >
            Notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default header;
