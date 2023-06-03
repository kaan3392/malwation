import styled from "styled-components";

export const Container = styled.div<BallProps>`
  width: 100%;
  display: flex;
  min-height: 50vh;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: ${(props) => (props.userDeleting ? "absolute" :"static")};
  right: ${(props) => (props.userDeleting && "0")};
  top: ${(props) => (props.userDeleting && "0")};
`;

export const Balls = styled.div`
  display: flex;
  align-items: center;
`;

interface BallProps {
  delay?: string;
  userDeleting?: boolean;
}

export const Ball = styled.div<BallProps>`
  width: ${(props) => (props.userDeleting ? "15px" : "45px")};
  height: ${(props) => (props.userDeleting ? "15px" : "45px")};
  border-radius: 50%;
  background-color: ${(props) => (props.delay === "ball2" ? "gray" : props.delay === "ball3" ? "lightgray" : "black")};
  margin-right: ${(props) => (props.userDeleting ? "5px" : "10px")};
  animation: ball 0.5s ease infinite alternate;
  animation-delay: ${(props) =>
    props.delay === "ball2" ? "0.15s" : props.delay === "ball3" ? "0.3s" : ""};

  @keyframes ball {
    to {
      transform: translateY(-20px);
    }
  }
`;
