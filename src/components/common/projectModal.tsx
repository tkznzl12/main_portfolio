import { styled } from "styled-components";
import { UseStateBoolean } from "../../data/type";
import Slide from "./slide";
import CloseBtn from "../../assets/img/closeBtn.svg";
import { useEffect } from "react";
const Modal = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  left: 0%;
  z-index: 2;
  background-color: #000000;
`;
const ModalComponent = styled.div`
  width: 80%;
  max-height: 80dvh;
  background-color: #000000;
  border: 2px solid;
  border-radius: 1vw;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4vw 0;
  .close {
    filter: invert(1);
    width: 3vw;
    position: absolute;
    right: 1vw;
    top: 1vw;
  }
  .content-box {
    width: 100%;
    height: 60vh;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .left-box {
    width: 90%;
    text-align: left;
    p {
      font-size: 1.5vw;
      line-height: 2vw;
    }
    .work {
      margin-top: 3vw;
    }
    .sub-work {
      margin-bottom: 2vw;
    }
    .work-explan {
      font-family: "OAGothic-Medium";
    }
  }
  .right-box {
    width: 60vw;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    max-height: 90dvh;
    .close {
      width: 7vw;
    }
    .content-box {
      height: 80vh;
    }
    .left-box {
      p {
        font-size: 4vw;
        line-height: 7vw;
      }
    }
    .right-box {
      width: 80vw;
    }
  }
`;
const Background = styled.div`
  width: 100vw;
  height: 100dvh;
  z-index: 1;
  background-color: #000000;
`;
export const ProjectModal = ({
  show,
  modalData,
  setModalToggle,
}: {
  show: boolean;
  modalData: any;
  setModalToggle: UseStateBoolean;
}) => {
  let bodycheck: any;
  if (typeof window !== "undefined") {
    bodycheck = document.getElementsByTagName("body")[0];
  }

  const closeBtnFunc = () => {
    setModalToggle(false);
    bodycheck.style.overflowY = "auto";
  };

  useEffect(() => {
    bodycheck.style.overflowY = "hidden";
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Modal>
        <Background />
        <ModalComponent>
          <button className="close" onClick={() => closeBtnFunc()}>
            <img src={CloseBtn} alt="x" />
          </button>
          <div className="content-box">
            <div className="left-box bold-text">
              <p className="">프로젝트 : {modalData.projectName}</p>
              <p>프로젝트 기간 : {modalData.period}</p>
              <p>프로젝트 소개 : {modalData.explanation}</p>
              <p>맡은 업무 : {modalData.part}</p>
              <p>사용한 기술 : {modalData.skill}</p>
              <div className="work">
                {modalData.work.map((workData: any) => (
                  <div className="sub-work">
                    <p className="work-title">{workData.title}</p>
                    {workData.workExplan.map((item: string) => (
                      <p className="work-explan">- {item}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="right-box">
              <Slide data={modalData.image} count={1} image />
            </div>
          </div>
        </ModalComponent>
      </Modal>
    </>
  );
};
