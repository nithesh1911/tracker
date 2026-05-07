/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React, { useState } from "react";

const page = () => {
  const [note1, setNote1] = useState("");
  const [output1, setOutput1] = useState("");
  const [note2, setNote2] = useState("");
  const [output2, setOutput2] = useState("");
  const [note3, setNote3] = useState("");
  const [output3, setOutput3] = useState("");

  const saveText = () => {
    setOutput1(note1);
    setOutput2(note2);
    setOutput3(note3);
  };
  return (
    <div
      className="bg-linear-to-r/increasing from-indigo-500 to-teal-400 h-full text-center
    "
    >
      <h2 className="text-5xl font-serif text-white">welcome to notes page</h2>
      <div className="flex flex-3 gap-4 items-center justify-between pt-10 p-3">
        <div className="grid grid-cols-1 justify-center items-center gap-4">
          <div className="text-2xl font-serif text-white">
            <h2>Note 1</h2>
            <textarea
              value={note1}
              onChange={(e) => setNote1(e.target.value)}
              placeholder="enter your notes"
              className="bg-white text-black h-70 rounded-lg  border-4border-blue-800 p-3"
            />
          </div>
          <div>
            <button
              onClick={saveText}
              className="bg-cyan-600 rounded-xl text-lg font-serif w-30 text-white hover:bg-linear-to-r/increasing from-indigo-500 to-teal-400"
            >
              save
            </button>
          </div>
          <div>
            <div className="bg-white h-50 rounded-lg border-4 border-blue-800 text-blue-950">
              {output1}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center items-center gap-4">
          <div className="text-2xl font-serif text-white">
            <h2>Note 2</h2>
            <textarea
              value={note2}
              onChange={(e) => setNote2(e.target.value)}
              placeholder="enter your notes"
              className="bg-white text-black h-70 rounded-lg  border-4border-blue-800 p-3"
            />
          </div>
          <div>
            <button
              onClick={saveText}
              className="bg-cyan-600 rounded-xl text-lg font-serif w-30 hover:bg-linear-to-r/increasing from-indigo-500 to-teal-400 text-white"
            >
              save
            </button>
          </div>
          <div>
            <div className="bg-white h-50 text-blue-950 rounded-lg border-4 border-blue-800">
              {output2}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center items-center gap-4">
          <div className="text-2xl font-serif text-white">
            <h2>Note 3</h2>
            <textarea
              value={note3}
              onChange={(e) => setNote3(e.target.value)}
              placeholder="enter your notes"
              className="bg-white text-black h-70 rounded-lg  border-4border-blue-800 p-3"
            />
          </div>
          <div>
            <button
              onClick={saveText}
              className="bg-cyan-600 rounded-xl text-lg font-serif w-30 hover:bg-linear-to-r/increasing from-indigo-500 to-teal-400 text-white"
            >
              save
            </button>
          </div>
          <div>
            <div className="bg-white h-50 text-blue-950 rounded-lg border-4 border-blue-800">
              {output3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
