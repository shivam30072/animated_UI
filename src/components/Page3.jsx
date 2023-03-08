import { useEffect, useState } from "react";
import page3 from "../images/page3.svg";
import page1phone from "../images/page1phone.png";
import page1phone2 from "../images/pag1phone2.png";
import page1box from "../images/page1box.png";
import page1bread from "../images/page1bread.png";
import Page4 from "./Page4";

import "../index.css";

const Page3 = ({ scroll }) => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    setLoad(1);
  }, []);

  if (scroll >= 84) {
    return (
      <div>
        <Page4 scroll={scroll} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col-reverse sm:flex sm:flex-row min-h-[100vh] w-[100%]  flex">
        <div
          className={`h-[30vh] sm:min-h-[100vh]  bg-slate-700 min-w-[45vw] flex flex-col justify-end `}
        >
          <img
            src={page3}
            alt="svg"
            className="hidden sm:flex absolute top-[20%] left-[33%] rounded-full bg-slate-700 p-2 w-[300px]"
          />
          <div className="absolute top-[38%] left-[28%]">
            <h1 className="text-5xl text-white font-bold letter">
              UX Strategy
            </h1>
            <p className="ml-36 mt-2 text-white font-light tracking-[2px]">
              and UI Design
            </p>
          </div>
          <div className="text-white flex flex-col mb-4 ml-4 font-light">
            <h1 className="text-4xl font-bold">ABC 456</h1>
            <p>we are the best web development company in the world</p>
            <span>view case study</span>
          </div>
        </div>
        <div className="h-[70vh] sm:min-h-[100vh] bg-slate-900 min-w-[55vw] flex justify-end overflow-hidden">
          <img
            className={` ${
              load === 1 ? "-translate-y-[10%]" : "-translate-y-[100%]"
            } transition duration-1000  h-[150px] `}
            src={page1box}
          />
          <img
            className={`${
              load === 1 ? "translate-y-[80%]" : "translate-y-[150%]"
            } w-[250px] h-[340px] mt-8 mr-6  transition duration-700`}
            src={page1phone}
            alt="img"
          />
          <img
            className={`${
              load === 1
                ? "-translate-y-[60%] sm:translate-y-[10%]"
                : "-translate-y-[150%]"
            } w-[250px] h-[430px] mt-8 mr-6  transition duration-700`}
            src={page1phone2}
            alt="img"
          />
          <img
            className={`${
              load === 1
                ? "-translate-y-[20%] sm:translate-y-[10%]"
                : "translate-y-[150%]"
            } bottom-[25%] sm:right-0 right-[0%] sm:bottom-0 transition duration-700 absolute w-[180px] h-[150px]`}
            src={page1bread}
          />
        </div>
      </div>
    );
  }
};

export default Page3;
