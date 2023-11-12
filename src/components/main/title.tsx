import { useState } from "react";
import { styled } from "styled-components";
import { useInterval } from "../function/common";

const MainTitle = styled.div`
  font-family: "OAGothic-Medium";
  h1 {
    font-size: 3vw;
    text-align: left;
  }
`;

const Title = () => {
  const [typingNum, setTypingNum] = useState(0);
  const [landingText, setLandingText] = useState("");
  const text = "안녕하세요! \n프론트개발자를 \n꿈꾸는 정수진입니다.";
  const [remove, setRemove] = useState(false);
  useInterval(
    () => {
      if (typingNum > 0 && remove) {
        setLandingText((prev) => {
          let result = prev.slice(0, typingNum ? typingNum - 1 : 0);

          setTypingNum((prev: number) => prev - 1);
          if (typingNum - 1 === 0) {
            setRemove(false);
          }
          return result;
        });
      } else {
        setLandingText((prev) => {
          let result = prev ? prev + text[typingNum] : text[0];

          if (typingNum < text.length - 1) {
            setTypingNum((prev: number) => prev + 1);
          } else {
            setRemove(true);
          }
          return result;
        });
      }
    },
    typingNum === text.length - 1 ? 200 : 150
  );

  return (
    <MainTitle>
      <pre className="inline animate-typingCursor">{landingText}</pre>
    </MainTitle>
  );
};

export default Title;
