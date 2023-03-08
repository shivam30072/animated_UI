import { useEffect, useState } from "react";
import page1 from "../images/page1.svg";
import page4phone1 from "../images/page4phone1.png";
import page4phone2 from "../images/page4phone2.png";

import "../index.css";

const Page1 = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    setLoad(1);
  }, []);

  return (
    <div className=" sm:min-h-[100vh] bg-slate-500  overflow-x-hidden flex flex-col-reverse sm:flex sm:flex-row">
      <div
        className={`h-[30vh] sm:min-h-[100vh]  bg-purple-700 sm:min-w-[35vw] md:min-w-[45vw] flex flex-col justify-end `}
      >
        <img
          src={page1}
          alt="svg"
          className="hidden sm:flex absolute top-[20%] sm:left-[10%] md:left-[25%] lg:left-[33%] rounded-full bg-purple-700 p-2 w-[300px]"
        />
        <div className="hidden sm:flex sm:flex-col  absolute top-[38%] left-[20%]">
          <h1 className="sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold letter">
            25+ Downloads
          </h1>
          <p className=" lg:ml-16 text-white font-light">
            on App store and google playstore
          </p>
        </div>
        <div className="text-white flex flex-col mb-4 ml-4 font-light">
          <h1 className="text-4xl font-bold">ABC 123</h1>
          <p>we are the best web development company in the world</p>
          <span>view case study</span>
        </div>
      </div>
      <div className="h-[70vh] sm:min-h-[100vh] bg-gray-200 w-full sm:min-w-[55vw] flex">
        <img
          className={`${
            load === 1 ? "translate-y-[0%]" : "-translate-y-[150%]"
          } min-h-[60vh] min-w-[50vw] sm:min-w-[25vw] sm:h-[550px] mt-8 sm:ml-24 transition duration-700`}
          src={page4phone1}
          alt="img"
        />
        <img
          className={`${
            load === 1 ? "translate-y-[0%]" : "translate-y-[150%]"
          } min-h-[60vh]  min-w-[50vw] sm:min-w-[20vw] sm:h-[550px] mt-8  transition duration-700`}
          src={page4phone2}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Page1;
