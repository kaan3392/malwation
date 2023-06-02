import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
  display: flex;
  min-height: calc(100vh - 99px);
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  align-content: center;
  justify-content: center;
`;

export const Balls = styled.div`
  display: flex;
  align-items: center;
`;

interface BallProps {
    delay?: string;
}

export const Ball = styled.div<BallProps>`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 10px;
  animation: ball 0.5s ease infinite alternate;
  animation-delay: ${(props) =>
    props.delay === "ball2" ? "0.15s" : props.delay === "ball3" ? "0.3s" : ""};

  @keyframes ball {
    to {
      transform: translateY(-20px);
    }
  }
`;