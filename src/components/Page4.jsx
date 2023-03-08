import { useEffect, useState } from "react";
import page4 from "../images/page4.svg";
import page5phone1 from "../images/page5phone1.png";
import page5phone2 from "../images/page5phone2.png";
import page5phone3 from "../images/page5phone3.png";
import Page5 from "./Page5";

import "../index.css";

const Page4 = ({ scroll }) => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    setLoad(1);
  }, []);

  if (scroll >= 112) {
    return (
      <div>
        <Page5 scroll={scroll} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col-reverse sm:flex sm:flex-row min-h-[100vh] bg-slate-500 flex overflow-x-hidden ">
        <div
          className={`h-[30vh] sm:min-h-[100vh]  bg-pink-700 min-w-[45vw] flex flex-col justify-end `}
        >
          <img
            src={page4}
            alt="svg"
            className="hidden sm:flex absolute top-[20%] left-[33%] rounded-full bg-pink-700 p-2 w-[300px]"
          />
          <div className="absolute top-[38%] left-[28%]">
            <h1 className="text-5xl text-white font-bold letter">
              Text Headline
            </h1>
            <p className="ml-36 text-white font-light tracking-[4px]">
              Footer Headline
            </p>
          </div>
          <div className="text-white flex flex-col mb-4 ml-4 font-light">
            <h1 className="text-4xl font-bold">ABC 789</h1>
            <p>we are the best web development company in the world</p>
            <span>view case study</span>
          </div>
        </div>
        <div className="h-[70vh] sm:min-h-[100vh] bg-pink-500 min-w-[55vw] flex overflow-hidden">
          <img
            className={`${
              load === 1
                ? "-translate-y-[60%] sm:translate-y-[30%]"
                : "-translate-y-[150%]"
            } w-[320px] h-[450px] mt-8 ml-36  transition duration-700`}
            src={page5phone1}
            alt="img"
          />
          <img
            className={`${
              load === 1 ? "translate-y-[0%]" : "translate-y-[150%]"
            } w-[320px] h-[450px] mt-8  transition mr-8 duration-700`}
            src={page5phone2}
            alt="img"
          />
          <img
            className={`${
              load === 1 ? "-translate-x-[20%]" : "translate-x-[150%]"
            } w-[320px] h-[400px] mt-16 translate-y-[40%]  transition duration-700`}
            src={page5phone3}
            alt="img"
          />
        </div>
      </div>
    );
  }
};

export default Page4;
