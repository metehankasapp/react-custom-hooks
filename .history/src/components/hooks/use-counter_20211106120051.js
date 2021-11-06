
import { useEffect,useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const ınterval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(ınterval);
  }, []);
};

export default useCounter;
/* use kullanarak başlamak zorunlu */
