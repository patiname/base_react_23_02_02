import styled from "styled-components";

const conArr = [
  {
    id: 0,
    title: "타이틀 1번",
    desc: "컨텐츠 1번의 내용 입니다.",
    bg: "https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_1280.jpg",
  },
  {
    id: 1,
    title: "타이틀 2번",
    desc: "컨텐츠 2번의 내용 입니다.",
    bg: "https://cdn.pixabay.com/photo/2023/01/09/17/50/sea-7707983_1280.jpg",
  },
  {
    id: 2,
    title: "타이틀 3번",
    desc: "컨텐츠 3번의 내용 입니다.",
    bg: "https://cdn.pixabay.com/photo/2022/11/17/01/35/black-forest-7597147_1280.jpg",
  },
];

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConWrap = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 48%;
  border: 3px solid black;
  h3 {
    font-size: 26px;
    font-weight: 900;
    margin: 20px 0;
  }

  p {
    line-height: 22px;
  }
`;

const Bg = styled.div`
  height: 200px;
  background: no-repeat url(${(props) => props.bgUrl}) center / cover;
`;

export const StyledEx02 = () => {
  return (
    <Wrap>
      <ConWrap>
        {/* <Con>
          <Bg bgUrl={conArr[0].bg} />
          <h3>{conArr[0].title}</h3>
          <p>{conArr[0].desc}</p>
        </Con>

        <Con>
          <Bg bgUrl={conArr[1].bg} />
          <h3>{conArr[1].title}</h3>
          <p>{conArr[1].desc}</p>
        </Con> */}

        {conArr.map((con) => (
          <Con key={con.id}>
            <Bg bgUrl={con.bg} />
            <h3>{con.title}</h3>
            <p>{con.desc}</p>
          </Con>
        ))}
      </ConWrap>
    </Wrap>
  );
};
