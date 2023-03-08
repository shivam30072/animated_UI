import page6s from "../images/page6s.svg";
import page6 from "../images/page6.png";
import Page7 from "./Page7";

import "../index.css";

const Page6 = ({ scroll }) => {

  if (scroll >= 168) {
    return (
      <div>
        <Page7 />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col-reverse sm:flex sm:flex-row min-h-[100vh] flex overflow-x-hidden ">
        <div
          className={`  bg-green-700 min-w-[45vw] flex flex-col justify-end `}
        >
          <img
            src={page6s}
            alt="svg"
            className="hidden sm:flex absolute top-[20%] left-[33%] rounded-full bg-green-700 p-2 w-[300px]"
          />
          <div className="absolute top-[38%] left-[20%]">
            <h1 className="text-5xl text-white font-bold letter">
              25+ Downloads
            </h1>
            <p className="ml-16 text-white font-light">
              on App store and google playstore
            </p>
          </div>
          <div className="text-white flex flex-col mb-4 ml-4 font-light">
            <h1 className="text-4xl font-bold">ABC 123</h1>
            <p>we are the best web development company in the world</p>
            <span>view case study</span>
          </div>
        </div>
        <div
          className={` min-w-[55vw] flex justify-center bg-left-top bg-cover bg-center`}
          style={{ backgroundImage: `url(${page6})` }}
        ></div>
      </div>
    );
  }
};

export default Page6;
