import { useEffect, useState } from "react";
import { Page1, Page2 } from "./components/index";

const App = () => {
  const [scroll, setScroll] = useState(0);
  let scrollAmount = 0;

  const handleScroll = (e) => {
    scrollAmount += Math.round(e.deltaY / 7);
    setScroll(scrollAmount);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
  }, []);

  return <div>{scroll >= 28 ? <Page2 scroll={scroll} /> : <Page1 />}</div>;
};

export default App;
