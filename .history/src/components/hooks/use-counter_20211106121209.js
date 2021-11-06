
import { useEffect,useState } from "react";

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const ınterval = setInterval(() => {
        if(forwards){
            setCounter((prevCounter) => prevCounter + 1);
        }else{
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(ınterval);
  }, [forwards]);

  return counter;
};

export default useCounter;
/* use kullanarak başlamak zorunlu */
/* istenilen her şey return edilebilir.(obje liste, string sayı...) */
