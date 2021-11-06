import React, { useEffect, useState } from "react";
import Card from "./Card";
import useCounter from "./hooks/use-counter";

const UpWardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default UpWardCounter;
