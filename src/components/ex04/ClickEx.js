import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bg};
`;

export const ClickEx = () => {
  const [bgColor, setBgColor] = useState("teal");
  const [isClick, setIsClick] = useState(true);

  const changeClick = () => {
    if (isClick) {
      setBgColor("gold");
      setIsClick(false);
    } else if (!isClick) {
      setBgColor("teal");
      setIsClick(true);
    }
  };

  return (
    <div>
      <Box bg={bgColor} onClick={changeClick}></Box>
    </div>
  );
};
