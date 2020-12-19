import styled from "styled-components";

const CatCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 15rem;
  height: 15rem;
  padding: 1rem;
  margin: 4rem 1rem;
  background: #f1f4f7;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  flex: 1;

  &:hover {
    transform: scale(1.05);
    background: #808c9e;
  }

  @media only screen and (max-width: 980px) {
    max-width: 100%;
    margin: 1rem;
  }
`;

const Title = styled.span`
  font-size: 2rem;
  color: #465a69;
`;

const DescBox = styled.p`
  justify-self: flex-end;
  margin: auto 0 3rem 0;
  height: 4rem;
  color: #465a69;
`;

const CategoryCard = (props) => {
  return (
    <CatCard>
      <Title>{props.title}</Title>
      <DescBox>{props.desc}</DescBox>
    </CatCard>
  );
};

export default CategoryCard;
