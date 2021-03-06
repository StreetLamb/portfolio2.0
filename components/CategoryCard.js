import styled from "styled-components";
import Link from "next/link";

const CatCard = styled.a`
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

  @media (hover: hover) {
    &:hover {
      transform: scale(1.02);
      background: #808c9e;
    }
  }

  @media only screen and (max-width: 980px) {
    max-width: 100%;
    margin: 1rem;
    &:hover {
    }
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

const CategoryCard = ({ title, desc }) => {
  return (
    <Link href={`/projects/all?cat=${title}`} passHref>
      <CatCard>
        <Title>{title}</Title>
        <DescBox>{desc}</DescBox>
      </CatCard>
    </Link>
  );
};

export default CategoryCard;
