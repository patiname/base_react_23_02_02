import styled from "styled-components";

const ConWrap = styled.div`
  width: 400px;
  border: 5px solid black;
  margin: 100px auto;
`;

const Bg = styled.img`
  width: 100%;
`;

const TitleWrap = styled.div`
  padding: 25px;
  h3 {
    font-size: 26px;
    font-weight: 900;
    margin-bottom: 20px;
  }

  p {
    line-height: 22px;
  }
`;

// const Title = styled.h3`
//   font-size: 26px;
//   font-weight: 900;
//   margin-bottom: 20px;
// `;

// const Desc = styled.p`
//   line-height: 22px;
// `;

export const Ex01 = () => {
  return (
    <ConWrap>
      <Bg src="https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_1280.jpg"></Bg>
      <TitleWrap>
        {/* <Title>Title</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae
          omnis vel amet maiores eveniet? Dolore, animi nobis minima cupiditate
          eaque modi unde sunt, quae sint rerum nihil! Illo, rem.
        </Desc> */}
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae
          omnis vel amet maiores eveniet? Dolore, animi nobis minima cupiditate
          eaque modi unde sunt, quae sint rerum nihil! Illo, rem.
        </p>
      </TitleWrap>
    </ConWrap>
  );
};
