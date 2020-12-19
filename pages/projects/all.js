import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import MediumCard from "../../components/MediumCard";
import { getAllPosts } from "../../lib/api";

const CategoryNav = styled.ul`
  display: flex;
  height: 15vh;
  background: #f1f4f7;
  padding: 2rem;
  align-items: center;
  list-style-type: none;
`;

const CatBigText = styled.span`
  margin-left: 10rem;
  font-weight: 600;
  font-size: 1.5rem;

  @media only screen and (max-width: 980px) {
    margin: auto;

`;

const CatNav = styled.li`
  padding: 0 1rem 0 auto;
  color: #465a69;

  &:first-child {
    margin-right: auto;
  }

  &:last-child {
    display: none;
    padding-right: 0.5rem;
  }

  @media only screen and (max-width: 980px) {
    display: none;
    &:first-child {
      display: flex;
    }
    &:last-child {
      display: flex;
    }
  }
`;

const CatSmallText = styled.span`
  font-size: 1.2rem;
  padding-right: 2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AllProjects = ({ allPosts }) => {
  return (
    <div>
      <Navbar />
      <CategoryNav>
        <CatNav>
          <CatBigText>BROWSE PROJECTS BY</CatBigText>
        </CatNav>
        <CatNav>
          <CatSmallText>Web dev</CatSmallText>
        </CatNav>
        <CatNav>
          <CatSmallText>ML</CatSmallText>
        </CatNav>
        <CatNav>
          <CatSmallText>Engineering</CatSmallText>
        </CatNav>
        <CatNav>
          <ion-icon size="large" name="chevron-down-outline"></ion-icon>
        </CatNav>
      </CategoryNav>
      <CardContainer>
        {allPosts
          ? allPosts.map((post, index) => (
              <MediumCard
                key={index}
                image="/images/project.webp"
                bgcolor={["#1d9696", "#d3770a", "#5c1e62"][index % 3]}
                category={post.category}
                title={post.title}
                date={post.date}
                slug={post.slug}
              />
            ))
          : null}
      </CardContainer>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "category", "date", "slug"]);
  return {
    props: { allPosts },
  };
}

export default AllProjects;
