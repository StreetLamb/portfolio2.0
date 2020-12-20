import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ImageBox = styled.div`
  display: flex;
  height: 20rem;
  position: relative;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.5s;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 10rem;
  justify-content: space-between;
  background: ${(props) => props.bgcolor || "#f1f4f7"};
  color: ${(props) => (props.bgcolor ? "white" : "#465a69")};
  background: #f1f4f7;
  color: #465a69;
  transition: background 0.2s, color 0.2s;
`;

const Card = styled.a`
  display: flex;
  height: 30rem;
  width: 30rem;
  margin: 1rem;
  border-radius: 0.5rem;
  flex-direction: column;
  overflow: hidden;
  transition: background 0.2s, color: 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover ${TextContainer} {
    background: ${(props) => props.bgcolor};
    color: white;
  }
  
  &:hover ${StyledImage} {
    transform: scale(1.2);
  }

  @media only screen and (max-width: 1020px) {
    width: 100%;
   }
`;

const MidText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 0.5rem;

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SmallText = styled(MidText)`
  font-size: 0.8rem;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MediumCard = ({ bgcolor, image, category, title, date, slug }) => {
  return (
    <Link href={`/projects/${slug}`} passHref>
      <Card bgcolor={bgcolor}>
        <ImageBox>
          <StyledImage src={image} layout="fill" alt="img of project" />
        </ImageBox>
        <TextContainer bgcolor={bgcolor}>
          <HeaderBox>
            <SmallText>{category}</SmallText>
            <MidText>{title}</MidText>
          </HeaderBox>

          <SmallText>{date}</SmallText>
        </TextContainer>
      </Card>
    </Link>
  );
};

export default MediumCard;
