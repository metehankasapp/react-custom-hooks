import React, { useState } from 'react';
import Card from './Card';

const UpWardCounter = () =>{

    const [counter,setCounter] = useState(0);

    const ınterval = setInterval(()=>{
        setCounter(counter+2);
    },1000)
    return (
        <Card>
            {counter}
        </Card>
    )
}

export default UpWardCounter;

