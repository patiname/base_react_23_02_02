import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.color};
`;

export const EventEx02 = () => {
  const [bgColor, setBgColor] = useState("green");

  const onClickBox = () => {
    setBgColor("gold");
  };

  //   *문제
  //   1.박스를 클릭할때 마다 색상이 빨간색 -> 파란색
  //   2.팝업 구현

  return (
    <>
      <h1
        style={{
          fontSize: "30px",
        }}
      >
        클릭하면 배경색이 변경됩니다!
      </h1>
      <Box color={bgColor} onClick={onClickBox}></Box>
    </>
  );
};
