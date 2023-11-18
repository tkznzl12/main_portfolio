import { styled } from "styled-components";
import { WorkInfo } from "../../data/arrayData";

interface WorkData {
  companyName: string;
  period: string;
  career: string;
  position: string;
  mainJob: Array<any>;
}

const WorkTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .big-title {
    padding: 7vw;
  }
`;

const WorkDetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const WorkDetailText = styled.div`
  width: 30%;
  line-height: 1.7vw;
  .company-name {
    font-size: 1.5vw;
    background-color: lightgoldenrodyellow;
    color: #222222;
    height: 2vw;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    line-height: 6vw;
    margin-bottom: 2vw;
    .company-name {
      font-size: 5vw;
      height: 9vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const WorkDetailContent = styled.div`
  width: 65%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const MainJobContent = styled.div`
  text-align: start;
  margin-bottom: 2vw;
  div {
    margin-bottom: 1vw;
  }
  .project-name {
    height: 2vw;
    font-size: 1.2vw;
    padding: 0.4vw;
    background-color: darkgrey;
    width: fit-content;
  }

  .content-skill {
    margin: 1vw 0;
    display: flex;
    font-size: 1.1vw;
  }
  .title-job {
    line-height: 2vw;
  }
  .content-job {
    line-height: 1.5vw;
  }
  @media screen and (max-width: 768px) {
    .project-name {
      font-size: 4vw;
      padding: 1vw 0.5vw;
      height: fit-content;
    }

    .content-skill {
      margin: 3vw 0;
      font-size: 3.4vw;
    }
    .title-job {
      line-height: 7.5vw;
    }
    .content-job {
      line-height: 7vw;
    }
  }
`;
const Work = () => {
  return (
    <WorkTag>
      <p className="big-title">WORK</p>
      {WorkInfo.map((infoData: WorkData, index: number) => (
        <WorkDetailBox>
          <WorkDetailText id={`company${index}`}>
            <p className="company-name bold-text">{infoData.companyName}</p>
            <p className="content-period">
              {infoData.period} ({infoData.career})
            </p>
            <p className="position">{infoData.position}</p>
          </WorkDetailText>
          <WorkDetailContent>
            {infoData.mainJob.map((job, num) => (
              <MainJobContent id={`c_${index}_p_${num}`}>
                <p className="project-name bold-text">{job.projectName}</p>
                <span>
                  <p className="content-skill bold-text">{job.skill}</p>
                </span>
                {job.job.map((data: any, titleNum: number) => (
                  <div id={`c_${index}_p_${num}_d_${titleNum}`}>
                    <p className="title-job bold-text">{data.title}</p>
                    {data.detail.map((text: string, textNum: number) => (
                      <p
                        className="content-job"
                        id={`c_${index}_p_${num}_d_${titleNum}_t_${textNum}`}
                      >
                        - {text}
                      </p>
                    ))}
                  </div>
                ))}
              </MainJobContent>
            ))}
          </WorkDetailContent>
        </WorkDetailBox>
      ))}
    </WorkTag>
  );
};

export default Work;
