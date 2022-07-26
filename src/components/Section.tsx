import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";

interface Props {
  id?: string;
  title: string;
  description: string;
  backgroundImg: string;
  leftBtnText: string;
  rightBtnText?: string;
}

const Section: React.FC<Props> = ({
  id,
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bgImage={backgroundImg} id={id}>
      <FadeIn delay={500} visible={true}>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </FadeIn>
      <Buttons>
        <FadeIn delay={500} visible={true}>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </FadeIn>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div<{ bgImage: string }>`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertiical
  align-items: center; //horizontal
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 4rem;
  width: 25rem;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  opacity: 0.85;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0.8rem;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 4rem;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
