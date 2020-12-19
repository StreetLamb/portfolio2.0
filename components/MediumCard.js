import styled from "styled-components";
import Image from "next/image";

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

const Card = styled.div`
  display: flex;
  height: 30rem;
  width: 20rem;
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

  @media only screen and (max-width: 700px) {
    width: 100%;
   }
`;

const MidText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 0.5rem;
`;

const SmallText = styled(MidText)`
  font-size: 0.8rem;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MediumCard = (props) => {
  return (
    <Card bgcolor={props.bgcolor}>
      <ImageBox>
        <StyledImage src={props.image} layout="fill" alt="img of project" />
      </ImageBox>
      <TextContainer bgcolor={props.bgcolor}>
        <HeaderBox>
          <SmallText>{props.category}</SmallText>
          <MidText>{props.title}</MidText>
        </HeaderBox>

        <SmallText>{props.date}</SmallText>
      </TextContainer>
    </Card>
  );
};

export default MediumCard;
