import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Card = styled.a`
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

  @media only screen and (max-width: 980px) {
    flex-direction: column;
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    height: 20rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1 1 25rem;
  flex-direction: column;
  padding: 1rem;
  background: ${(props) => props.bgcolor || "#f1f4f7"};
  color: ${(props) => (props.bgcolor ? "white" : "#465a69")};

  ${(props) =>
    props.animate == "true" &&
    css`
      background: #f1f4f7;
      color: #465a69;
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
  margin-bottom: auto;

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const BigCard = ({ animate, bgcolor, image, title, slug, date }) => {
  return (
    <Link href={`/projects/${slug}`} passHref>
      <Card animate={animate} bgcolor={bgcolor}>
        <ImageBox>
          <StyledImage
            animate={animate}
            src={image}
            layout="fill"
            alt="img of noteworthy project"
          />
        </ImageBox>

        <TextContainer bgcolor={bgcolor} animate={animate}>
          <StyledText>{title}</StyledText>
          <span>{date}</span>
        </TextContainer>
      </Card>
    </Link>
  );
};

export default BigCard;
