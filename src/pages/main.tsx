import { styled } from "styled-components";
import AboutMe from "../components/main/aboutMe";
import Work from "../components/main/work";
import Project from "../components/main/project";
import Title from "../components/main/title";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
const MainTag = styled.div`
  overflow: hidden;

  .first-div {
    .scrollmagic-pin-spacer {
      height: 100vh !important;
    }
  }

  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: absolute;
    left: -10vw;
  }

  .absolute {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
    background-color: #000000;
  }

  @media screen and (max-width: 768px) {
    #pinContainer {
      left: 0;
    }
  }
`;
const Main = () => {
  return (
    <MainTag>
      <>
        <div className="first-div">
          <Controller>
            <Scene triggerHook="onLeave" duration="200%" pin>
              <Timeline wrapper={<div id="pinContainer" />}>
                <div className="absolute">
                  <Title />
                </div>
                <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
                  <div className="absolute">
                    <AboutMe />
                  </div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </div>
        <div className="detail-page">
          <Work />
        </div>
        <div className="detail-page">
          <Project />
        </div>
      </>
    </MainTag>
  );
};

export default Main;
