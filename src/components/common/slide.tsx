import { useEffect, useState } from "react";
import { styled } from "styled-components";
import PrevImg from "../../assets/img/prevBtn.svg";
import NextImg from "../../assets/img/nextBtn.svg";
import { UseStateAny, UseStateBoolean } from "../../data/type";

interface SlideData {
  projectName: string;
  period: string;
  explanation: string;
  part: string;
  skill: string;
  image: Array<string>;
  work: Array<object>;
}

const SlideComponent = styled.div<{
  image: boolean;
}>`
  width: 100%;
  position: relative;
  .arrow-btn {
    width: 3vw;
    filter: invert(1);
    position: absolute;
    top: 40%;
  }
  .prev {
    left: -4vw;
  }
  .next {
    right: -4vw;
  }
  @media screen and (max-width: 768px) {
    .arrow-btn {
      width: 8vw;
    }
    .prev {
      left: ${(props) => (props.image ? "-4vw" : "-10vw")};
    }
    .next {
      right: ${(props) => (props.image ? "-4vw" : "-10vw")};
    }
  }
`;

const SlideView = styled.div`
  overflow: hidden;
  .all-box {
    display: flex;
    width: max-content;
  }
`;

const SlidePage = styled.div<{
  itemCount: number;
  positionNum: number;
  image: boolean;
}>`
  width: ${(props) => (props.image ? "60vw" : "56vw")};
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.itemCount}, 1fr)`};
  gap: 1vw;
  transform: ${(props) =>
    `translate(${
      props.image ? props.positionNum * 60 : props.positionNum * 56
    }vw, 0%)`};
  transition: 0.5s;
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.image ? "80vw" : "75vw")};
    transform: ${(props) =>
      `translate(${
        props.image ? props.positionNum * 80 : props.positionNum * 75
      }vw, 0%)`};
  }
`;

const SlideItem = styled.div<{ image: boolean }>`
  width: ${(props) => (props.image ? "60vw" : "100%")};
  line-height: 1.5vw;
  border: ${(props) => (props.image ? "none" : "2px solid #ffffff")};
  border-radius: 2vw;
  padding: 2vw 1vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    width: 100%;
  }
  span {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .project-name {
    font-size: 1.5vw;
  }
  .period {
    margin-top: 1vw;
  }
  .explan-box {
    display: flex;
    justify-content: center;
    white-space: pre-line;
    align-items: center;
    margin-top: 2vw;
    height: 8vw;
  }
  .sub-text {
    font-size: 1.1vw;
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.image ? "80vw" : "100%")};
    padding: 5vw;
    span {
      align-items: center;
    }
    .project-name {
      font-size: 5.5vw;
    }
    .period {
      margin-top: 4vw;
    }
    .explan-box {
      height: 43vw;
      line-height: 8vw;
    }
    .sub-text {
      font-size: 5vw;
    }
  }
`;

const MoreBtn = styled.button`
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 0.1vw 0.5vw;
  @media screen and (max-width: 768px) {
    padding: 3vw 2vw;
  }
`;

const Slide = ({
  data,
  count,
  setModalToggle,
  setModalData,
  modalToggle,
  image,
}: {
  data: any;
  count: number;
  setModalToggle?: UseStateBoolean;
  setModalData?: UseStateAny;
  modalToggle?: boolean;
  image: boolean;
}) => {
  const [slidePageItem, setSlidePageItem] = useState<Array<any>>([]);
  const [positionNum, setPositionNum] = useState<number>(0);
  const sliceItem = () => {
    console.log(count);
    const newArr = [];

    for (let i = 0; i < data.length; i += +count) {
      newArr.push(data.slice(i, i + +count));
    }
    setSlidePageItem(newArr);
  };

  const clickPrev = () => {
    setPositionNum(positionNum + 1);
  };

  const clickNext = () => {
    setPositionNum(positionNum - 1);
  };

  const setData = (item: any) => {
    setModalToggle?.(!modalToggle);
    setModalData?.(item);
  };

  useEffect(() => {
    sliceItem();
  }, []);

  return (
    <SlideComponent image={image}>
      <SlideView>
        <div className="all-box">
          {slidePageItem.length > 0 &&
            slidePageItem.map((array: any) => (
              <SlidePage
                itemCount={count}
                positionNum={positionNum}
                image={image}
              >
                {array.map((item: SlideData | any) => (
                  <SlideItem image={image}>
                    {!image && (
                      <>
                        <span>
                          <p className="project-name bold-text">
                            {item.projectName}
                          </p>
                          <MoreBtn onClick={() => setData(item)}>
                            더보기
                          </MoreBtn>
                        </span>
                        <p className="period sub-text">{item.period}</p>
                        <div className="explan-box">
                          <p className="explan sub-text">{item.explanation}</p>
                        </div>
                      </>
                    )}
                    {image && <img src={item} alt={item} />}
                  </SlideItem>
                ))}
              </SlidePage>
            ))}
        </div>
      </SlideView>
      {positionNum !== 0 && (
        <button className="arrow-btn prev" onClick={clickPrev}>
          <img src={PrevImg} alt="<" />
        </button>
      )}
      {+positionNum !== -(slidePageItem.length - 1) && (
        <button className="arrow-btn next" onClick={clickNext}>
          <img src={NextImg} alt=">" />
        </button>
      )}
    </SlideComponent>
  );
};

export default Slide;
