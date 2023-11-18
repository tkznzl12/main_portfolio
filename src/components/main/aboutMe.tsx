import { Mail, Phone, User } from "react-feather";
import { styled } from "styled-components";

const AboutMeTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vw;

  .introduction {
    line-height: 2.5vw;
    font-size: 1.5vw;
  }

  @media screen and (max-width: 768px) {
    .introduction {
      line-height: 6vw;
      font-size: 4vw;
    }
  }
`;

const MyInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 5vw;
  }
`;

const ContentBox = styled.div`
  font-family: "OAGothic-ExtraBold";
  width: fit-content;
  font-size: 1.2vw;
  span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .text {
    text-align: start;
    margin-left: 2.5rem;
    line-height: 1.7vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
    display: flex;
    flex-direction: column;
    gap: 2vw;
  }
`;

const AboutMe = () => {
  const MyInfo = [
    {
      icon: <User />,
      title: "Name",
      text: "정수진",
    },
    {
      icon: <Phone />,
      title: "PhoneNum",
      text: "010-2994-8392",
    },
    {
      icon: <Mail />,
      title: "E-mail",
      text: "tkznzl12@naver.com",
    },
  ];

  return (
    <AboutMeTag className="page">
      <p className="big-title">ABOUT ME</p>

      <div className="introduction">
        <p>다재다능한 프론트엔드 개발자를 꿈꾸는 사람입니다.</p>
        <p>적극적인 마음과 끈기로 어떤 것이든</p>
        <p> 구현가능한 개발자를 목표하고있습니다.</p>
      </div>

      <MyInfoBox>
        {MyInfo.map((info, index) => (
          <ContentBox id={`index${index}`}>
            <span>
              {info.icon}
              <p className="title">{info.title}</p>
            </span>
            <p className="text">{info.text}</p>
          </ContentBox>
        ))}
      </MyInfoBox>
    </AboutMeTag>
  );
};

export default AboutMe;
