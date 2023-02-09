import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  background-color: gray;
`;

const PopUp = styled.div`
  width: 300px;
  height: 300px;
  background-color: lightcoral;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => props.display};
`;

const CloseBtn = styled.div`
  font-size: 30px;
  font-weight: 900;
  float: right;
  margin: 20px;
  cursor: pointer;
`;

export const PopEx = () => {
  const [show, setShow] = useState("none");

  const onClickPop = () => {
    setShow("block");
  };

  const onCLickClose = () => {
    setShow("none");
  };

  return (
    <div>
      <Box onClick={onClickPop}>클릭 해 주세요!</Box>

      <PopUp display={show}>
        <CloseBtn onClick={onCLickClose}>X</CloseBtn>
      </PopUp>
    </div>
  );
};
