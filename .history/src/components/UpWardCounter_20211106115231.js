import React, { useEffect, useState } from "react";
import Card from "./Card";

const UpWardCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const ınterval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
  }, []);
  return <Card>{counter}</Card>;
};

export default UpWardCounter;
