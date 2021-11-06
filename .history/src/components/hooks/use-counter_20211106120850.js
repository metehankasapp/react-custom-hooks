
import { useEffect,useState } from "react";

const useCounter = (counterUpdateFn) => {
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const ınterval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(ınterval);
  }, []);

  return counter;
};

export default useCounter;
/* use kullanarak başlamak zorunlu */
/* istenilen her şey return edilebilir.(obje liste, string sayı...) */
