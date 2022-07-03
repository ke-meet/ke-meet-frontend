import styled from "styled-components";
import logoImg from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-between;
  align-items: center;
`;
const LogoImg = styled.img``;
const Logo = styled(Link)``;
// const Button = styled.button``;
const HamburgerLink = styled(Link)``;
const HamburgerIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 20px;
`;

function Nav() {
  // const [state, setState] = useState({
  //   isPaneOpen: false,
  // });

  return (
    <Container>
      <Logo to={"/"}>
        <LogoImg src={logoImg}></LogoImg>
      </Logo>
      <HamburgerLink to={"/hamburger"}>
        <HamburgerIcon icon={faBars} />
      </HamburgerLink>

      {/* 슬라이딩 메뉴로 만들었다가 만들어보니 이상한거같아서 일단 주석처리 해둠 */}
      {/* <Button
        onClick={() => {
          setState({ isPaneOpen: true });
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button> */}
      {/* <SlidingPane
        isOpen={state.isPaneOpen}
        from="right"
        width="100vw"
        onRequestClose={() => setState({ isPaneOpen: false })}
        hideHeader={true}
        closeIcon={
          <div>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        }
      >
        여기에 햄버거 컴포넌트 삽입
      </SlidingPane> */}
    </Container>
  );
}

export default Nav;
