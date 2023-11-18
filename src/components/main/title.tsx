import { useState } from "react";
import { styled } from "styled-components";
import { useInterval } from "../function/common";

const MainTitle = styled.div`
  font-family: "OAGothic-Medium";

  display: flex;
  align-items: center;
  min-height: 100dvh;
  max-height: 100dvh;
  #leftSide {
    text-align: left;
    width: 50vw;
    pre {
      font-size: 4vw;
      white-space: pre-line;
      line-height: 10vw;
    }
  }
  @media screen and (max-width: 768px) {
    #leftSide {
      width: 100%;
      pre {
        font-size: 9vw;
        line-height: 15vw;
      }
    }
  }
`;

const Title = () => {
  const [typingNum, setTypingNum] = useState(0);
  const [landingText, setLandingText] = useState("");
  const text = "안녕하세요!\n 프론트엔드 개발자 \n정수진입니다.  ";
  const [remove, setRemove] = useState(false);
  useInterval(() => {
    // remove함수
    if (typingNum > 0 && remove) {
      setLandingText((content) => {
        let result = content.slice(0, typingNum ? typingNum - 1 : 0);

        setTypingNum((content: number) => content - 1);
        if (typingNum - 1 === 0) {
          setRemove(false);
        }
        return result;
      });
      //글자를 기록할때의 함수
    } else {
      setLandingText((content) => {
        let result = content ? content + text[typingNum] : text[0];

        if (typingNum < text.length - 1) {
          setTypingNum((content: number) => content + 1);
        } else {
          setRemove(true);
        }
        return result;
      });
    }
  }, 150);

  return (
    <MainTitle>
      <div id="leftSide">
        <pre className="inline animate-typingCursor text-left">
          {landingText}
        </pre>
      </div>
    </MainTitle>
  );
};

export default Title;
