import { Link } from "react-router-dom";
import styled from "styled-components";

const Banner = styled.section`
  height: 800px;
  background: no-repeat
    url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg)
    center / cover;
`;

const Section = styled.section`
  padding: 100px 500px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 420px;
  height: 500px;
  background: no-repeat url(${(props) => props.url}) center / cover;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  &:hover {
    transform: translate(-15px, -15px);
  }
`;

export const Home = () => {
  return (
    <div>
      <Banner />

      <Section>
        <Link to="/sub01">
          <Con
            url={
              "https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg"
            }
          ></Con>
        </Link>

        <Link to="/sub02">
          <Con
            url={
              "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
            }
          ></Con>
        </Link>
      </Section>
    </div>
  );
};
