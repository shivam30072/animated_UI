import { useEffect, useState } from "react";
import page5 from "../images/page5.svg";
import page2phone from "../images/page2phone.png";
import page2phone2 from "../images/page2phone2.png";
import Page6 from "./Page6";


import "../index.css";

const Page5 = ({ scroll }) => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    setLoad(1);
  }, []);

  if (scroll >= 140) {
    return (
      <div>
        <Page6 scroll={scroll} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col-reverse sm:flex sm:flex-row min-h-[100vh] bg-slate-500 flex overflow-x-hidden ">
        <div
          className={`  bg-slate-700 min-w-[45vw] flex flex-col justify-end `}
        >
          <img
            src={page5}
            alt="svg"
            className="hidden sm:flex absolute top-[20%] left-[33%] rounded-full bg-slate-700 p-2 w-[300px]"
          />
          <div className="absolute top-[30%] left-[23%]">
            <h1 className="text-9xl text-white font-bold letter">NASA</h1>
            <p className="ml-44 text-white font-light tracking-[4px]">
              Algorithms
            </p>
          </div>
          <div className="text-white flex flex-col mb-4 ml-4 font-light">
            <h1 className="text-4xl font-bold">ABC 345</h1>
            <p>we are the best web development company in the world</p>
            <span>view case study</span>
          </div>
        </div>
        <div className=" bg-slate-400 min-w-[55vw] flex justify-around overflow-hidden">
          <img
            className={`${
              load === 1 ? "translate-y-[20%]" : "-translate-y-[150%]"
            } w-[250px] h-[450px] mt-8 ml-16  transition duration-700`}
            src={page2phone2}
            alt="img"
          />
          <img
            className={`${
              load === 1 ? "translate-y-[0%]" : "translate-y-[80%]"
            } w-[200px] h-[450px] mt-8  transition duration-700`}
            src={page2phone}
            alt="img"
          />
        </div>
      </div>
    );
  }
};

export default Page5;
