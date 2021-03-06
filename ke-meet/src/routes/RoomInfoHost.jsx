import styled from "styled-components";
import Nav from "../components/common/Nav";
import Slider from "react-slick";
import sliderImg1 from "../images/slide-photo-1.png";
import sliderImg2 from "../images/slide-photo-2.png";
import profileImg from "../images/Ellipse1.png";
import foodImg from "../images/food.jpeg";
import mapImg from "../images/mapImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faPerson, faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100%;
`;
const Container = styled.div`
  padding: 30px;
`;
const SliderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SliderImg = styled.img`
  display: block;
  width: 100%;
  height: 23vh;
`;
const Box = styled.div`
  padding: 30px 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const InfoSummary = styled(Box)`
  img {
    position: absolute;
    right: 0;
    bottom: 20px;
  }
`;
const HostInfo = styled(Box)`
  padding: 30px 0;
  p:first-child {
    margin-bottom: 20px;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  width: 20px;
  text-align: center;
`;
const PlaceInfo = styled(Box)`
  p {
    font-size: 16px;
    font-weight: normal;
    margin-left: 20px;
  }
  h3 {
    display: flex;
  }
  img {
    width: 100%;
  }
`;
const Notice = styled(Box)`
  p {
    margin-top: 1vh;
  }
`;
const WaitingBox = styled(Box)``;
const WaitingList = styled.ul`
  li {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  display: grid;
  grid-template-columns: auto auto auto;
`;
const UserProfile = styled.button`
  border: none;
  background-color: inherit;
`;
const ModalContent = styled.div`
  button {
    border: none;
    position: absolute;
    right: 10%;
    top: 10%;
    font-size: 20px;
  }
  img {
    margin-bottom: 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HashTag = styled.ul`
  display: flex;
  li {
    margin-right: 20px;
    :last-child {
      margin-right: 0;
    }
    border-radius: 30px;
    background-color: #d9d9d9;
    padding: 10px;
  }
  padding: 20px 0;
`;

const AuthBox = styled(Box)`
  img {
    width: 100%;
  }
`;
const ReviewBox = styled(Box)``;

// api, db ?????? ???????????? ???????????? ???. ?????? ????????? ???????????? ??????.

function RoomInfoHost() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "30px",
      backgroundColor: "#ebebeb",
      border: 0,
    },
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Wrapper>
      <Nav />
      <Slider {...settings}>
        <SliderBox>
          <SliderImg src={sliderImg1} />
        </SliderBox>
        <SliderBox>
          <SliderImg src={sliderImg2} />
        </SliderBox>
      </Slider>
      <Container>
        <InfoSummary>
          <Title>6??? 24??? ????????? 13:00</Title>
          <Title>#??????</Title>
          <Title>????????? : Peter???</Title>
          <span>???????????? : 4???</span>
          <img src={profileImg} alt="????????? ??????" />
        </InfoSummary>
        <HostInfo>
          <p>
            <Icon icon={faMedal} />
            ?????? ????????? 3??? ?????? ????????? ??????????????????.
          </p>
          <p>
            <Icon icon={faPerson} />
            ???????????? 18??????
          </p>
        </HostInfo>
        <PlaceInfo>
          <Title>
            ?????? ??????<p>310??? B4 ????????? ??????</p>
          </Title>
          <img src={mapImg} alt="??????" />
        </PlaceInfo>
        <Notice>
          <Title>????????????</Title>
          <p>????????????</p>
        </Notice>
        <WaitingBox>
          <Title>????????? ??????</Title>
          <WaitingList>
            <li>
              <UserProfile onClick={openModal}>
                <img src={profileImg} />
              </UserProfile>
              <p>??????</p>
            </li>
            <li>
              <UserProfile onClick={openModal}>
                <img src={profileImg} />
              </UserProfile>
              <p>??????</p>
            </li>
            <li>
              <UserProfile onClick={openModal}>
                <img src={profileImg} />
              </UserProfile>
              <p>??????</p>
            </li>
            <li>
              <UserProfile onClick={openModal}>
                <img src={profileImg} />
              </UserProfile>
              <p>??????</p>
            </li>
          </WaitingList>
          <Modal
            style={modalStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <ModalContent>
              <img src={profileImg} />
              <Title>??????</Title>
              <HashTag>
                <li>??????</li>
                <li>??????</li>
                <li>??????</li>
              </HashTag>
              <button onClick={closeModal}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </ModalContent>
          </Modal>
        </WaitingBox>
        <AuthBox>
          <Title>????????????</Title>
          <img src={foodImg} />
        </AuthBox>
        <ReviewBox>
          <Title>?????? ??????</Title>
          <p>????????????????????? ????????? ?????? ?????????????????????~!!</p>
        </ReviewBox>
      </Container>
    </Wrapper>
  );
}

export default RoomInfoHost;

