import styled from "styled-components";
import AboutMe from "../components/main/aboutMe";

const Title = styled.div`
  h1 {
    font-size: 3vw;
    text-align: left;
  }
`;

const Main = () => {
  return (
    <>
      <Title>
        <h1>안녕하세요!</h1>
        <h1>프론트 개발자를 꿈꾸는</h1>
        <h1>정수진입니다.</h1>
      </Title>
      <AboutMe />
    </>
  );
};

export default Main;
