import { useEffect } from "react";
import { useState } from "react";
import { StopWatch } from "./StopWatch";

export const CleanUpEx = () => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("시작");

  const handleClick = () => {
    setToggle(!toggle);
    setText(toggle ? "시작" : "종료");
  };

  return (
    <div>
      {toggle ? (
        <StopWatch />
      ) : (
        <>
          <h3>스톱워치</h3>
          <p>0초</p>
        </>
      )}
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};
