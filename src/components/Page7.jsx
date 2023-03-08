import { useEffect, useState } from "react";
import page7 from "../images/page7.svg";
import page4phone1 from "../images/page4phone1.png";
import page4phone2 from "../images/page4phone2.png";

import "../index.css";

const Page7 = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    setLoad(1);
  }, []);

  return (
    <div className="flex flex-col-reverse sm:flex sm:flex-row min-h-[100vh] flex overflow-x-hidden ">
      <div className={`bg-red-700 min-w-[45vw] flex flex-col justify-end `}>
        <img
          src={page7}
          alt="svg"
          className="hidden sm:flex absolute top-[20%] left-[33%] rounded-full bg-red-700 p-2 w-[300px]"
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
      <div className=" bg-red-400 min-w-[55vw] flex overflow-hidden">
        <img
          className={`${
            load === 1 ? "translate-y-[0%]" : "-translate-y-[150%]"
          } w-[320px] h-[550px] mt-8 ml-24  transition duration-700`}
          src={page4phone1}
          alt="img"
        />
        <img
          className={`${
            load === 1 ? "translate-y-[0%]" : "translate-y-[150%]"
          } w-[320px] h-[550px] mt-8  transition duration-700`}
          src={page4phone2}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Page7;
