import { styled } from "styled-components";
import { projectData } from "../../data/arrayData";
import Slide from "../common/slide";
import { useEffect, useState } from "react";
import { ProjectModal } from "../common/projectModal";

const ProjectTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7vw;
  @media screen and (max-width: 768px) {
    .slide-box {
      width: 75vw;
      margin: 0 auto;
    }
  }
`;
const Project = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [modalData, setModalData] = useState({});
  let mobile;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 768) {
      mobile = true;
    } else {
      mobile = false;
    }
  }
  return (
    <>
      {modalToggle && (
        <ProjectModal
          show={modalToggle}
          modalData={modalData}
          setModalToggle={setModalToggle}
        />
      )}
      <ProjectTag className="page">
        <p className="big-title">PROJECT</p>
        <div className="slide-box">
          <Slide
            data={projectData}
            count={mobile ? 1 : 3}
            setModalToggle={setModalToggle}
            setModalData={setModalData}
            modalToggle={modalToggle}
            image={false}
          />
        </div>
      </ProjectTag>
    </>
  );
};
export default Project;
