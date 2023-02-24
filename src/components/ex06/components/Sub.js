import styled from "styled-components";

const Section = styled.section`
  padding: 120px 500px;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 50%;
  height: 500px;
  background: no-repeat url(${(props) => props.bgUrl}) center / cover;
`;

const TitleWrap = styled.div`
  width: 50%;
  padding: 50px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 900;
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 100;
  color: gray;
  margin-top: 30px;
`;

export const Sub = ({ url, title, desc }) => {
  return (
    <Section>
      <Bg bgUrl={url} />
      <TitleWrap>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </TitleWrap>
    </Section>
  );
};
