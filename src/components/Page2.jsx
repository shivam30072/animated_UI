import { useEffect, useState } from "react";
import page2 from "../images/page2.svg";
import page3phone1 from "../images/page3phone1.png";
import page3phone2 from "../images/page3phone2.png";

import Page3 from "./Page3";

import "../index.css";

const Page2 = ({ scroll }) => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    setLoad(1);
  }, [scroll]);

  if (scroll >= 56) {
    console.log(scroll);
    return (
      <div>
        <Page3 scroll={scroll} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col-reverse sm:flex sm:flex-row sm:min-h-[100vh] flex overflow-x-hidden ">
        <div
          className={`h-[30vh] sm:min-h-[100vh]  bg-blue-700 min-w-[45vw] flex flex-col justify-end`}
        >
          <img
            src={page2}
            alt="svg"
            className="hidden sm:flex absolute top-[20%] left-[33%] rounded-full bg-blue-700 p-2 w-[300px]"
          />
          <div className="absolute top-[38%] left-[28%]">
            <h1 className="text-5xl text-white font-bold ">Blockchain</h1>
            <p className="ml-36  text-white font-light tracking-[3px]">
              Revolution
            </p>
          </div>
          <div className="text-white flex flex-col mb-4 ml-4 font-light">
            <h1 className="text-4xl font-bold">ABC 456</h1>
            <p>we are the best web development company in the world</p>
            <span>view case study</span>
          </div>
        </div>
        <div className="h-[70vh] sm:min-h-[100vh] bg-blue-900 min-w-[55vw] flex justify-end overflow-hidden">
          <img
            className={`${
              load === 1
                ? "translate-y-[60%] sm:translate-y-[70%]"
                : "translate-y-[150%]"
            } w-[30vw] sm:w-[250px] h-[350px] min-h-[60vh] mt-8 sm:mr-0  lg:mr-6 mr-24  transition duration-700`}
            src={page3phone1}
            alt="img"
          />
          <img
            className={`${
              load === 1 ? "-translate-y-[50%]" : "-translate-y-[150%] "
            } -translate-y-[70%] w-[150px] sm:w-[250px] min-h-[60vh] h-[500px] mt-8 mr-8 transition duration-700`}
            src={page3phone2}
            alt="img"
          />
        </div>
      </div>
    );
  }
};

export default Page2;
