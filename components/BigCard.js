import styled, { css } from "styled-components";
import Image from "next/image";

const Card = styled.div`
  display: flex;
  height: 30rem;
  width: 60rem;
  margin: 2rem 1rem;
  align-self: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.animate == "true" &&
    css`
    transition: background 0.2s, color: 0.2s, transform 0.2s;
    &:hover ${TextContainer} {
      background: ${(props) => props.bgcolor};
      color: white;
    }
    &:hover ${StyledImage} {
      transform: scale(1.2);
    }
  `}
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1 1 25rem;
  flex-direction: column;
  padding: 1rem;
  background: ${(props) => props.bgcolor || "#f1f4f7"};
  color: ${(props) => (props.bgcolor ? "white" : "black")};

  ${(props) =>
    props.animate == "true" &&
    css`
      background: #f1f4f7;
      color: black;
      transition: background 0.2s, color 0.2s;
    `}
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  ${(props) =>
    props.animate == "true" &&
    css`
      transition: transform 0.5s;
    `}
`;

const ImageBox = styled.div`
  display: flex;
  flex: 4 1 35rem;
  position: relative;
`;

const StyledText = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

const BigCard = (props) => {
  return (
    <Card animate={props.animate} bgcolor={props.bgcolor}>
      <ImageBox>
        <StyledImage
          animate={props.animate}
          src={props.image}
          layout="fill"
          alt="img of noteworthy project"
        />
      </ImageBox>

      <TextContainer bgcolor={props.bgcolor} animate={props.animate}>
        <StyledText>{props.title}</StyledText>
      </TextContainer>
    </Card>
  );
};

export default BigCard;
