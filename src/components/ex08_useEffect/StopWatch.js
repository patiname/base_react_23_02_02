import { useEffect } from "react";
import { useState } from "react";

export const StopWatch = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      //   console.log("1초마다 실행중");
      setNum(num + 1);
    }, 1000);

    return () => {
      clearInterval(time);
    };
    // =>코드를 종료시킬땐(clean up) return을 사용하여 종료 시키면됨
  }, [num]);
  //   console.log(num);

  return (
    <>
      <h3>스톱워치</h3>
      <p>{num}초</p>
    </>
  );
};
