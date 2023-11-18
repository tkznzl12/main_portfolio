import AboutMe from "../components/main/aboutMe";
import Work from "../components/main/work";
import Project from "../components/main/project";
import Title from "../components/main/title";

const Main = () => {
  return (
    <>
      <Title />
      <div className="detail-page">
        <AboutMe />
        <Work />
        <Project />
      </div>
    </>
  );
};

export default Main;
