import React,{ useState,useEffect } from "react";
import Card from "./Card";

const BackWardCounter = () =>{
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const ınterval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + -1);
    }, 1000);

    return () => clearInterval(ınterval);
  }, []);
  return <Card>{counter}</Card>;
}

export default BackWardCounter;

