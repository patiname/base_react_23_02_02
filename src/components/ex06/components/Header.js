import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  padding: 20px 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: 900;
`;

const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-left: 150px;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to="/">LOGO</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to="/sub01">메뉴1</Link>
        </Menu>
        <Menu>
          <Link to="/sub02">메뉴2</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
