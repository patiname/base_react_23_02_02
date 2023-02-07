import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  background-color: teal;
`;

const Child = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  margin-bottom: 20px;
`;

const Text = styled.h1`
  font-size: ${(props) => props.fontSize};
`;

const Con = styled.div`
  h3 {
    font-size: 30px;
  }

  p {
    font-size: 17px;
    color: gray;
  }
`;

export const StyledEx = () => {
  return (
    <div>
      <Box>
        <Child bgColor="salmon">
          <Text fontSize="30px">박스1번</Text>
        </Child>
        <Child bgColor="yellow">
          <Text fontSize="20px">박스2번</Text>
        </Child>

        <Con>
          <h3>Title</h3>
          <p>내용입니다.</p>
        </Con>
      </Box>
    </div>
  );
};
