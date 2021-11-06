import React,{ useState,useEffect } from "react";
import Card from "./Card";
import useCounter from "./hooks/use-counter";

const BackWardCounter = () =>{
    const counter = useCounter(false);

  return <Card>{counter}</Card>;
}

export default BackWardCounter;

