import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import MediumCard from "../../components/MediumCard";
import { getAllPosts } from "../../lib/api";
import { useState } from "react";

const CategoryNav = styled.ul`
  display: flex;
  height: 15vh;
  background: #f1f4f7;
  padding: 2rem;
  align-items: center;
  list-style-type: none;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
  }
`;

const CatBigText = styled.span`
  margin-left: 10rem;
  font-weight: 600;
  font-size: 1.5rem;

  @media only screen and (max-width: 980px) {
    margin: 0;
    font-size: 1rem;
  }
`;

const CatNav = styled.li`
  padding: 0 1rem 0 auto;
  align-items: center;
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

  @media only screen and (max-width: 528px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 480px) {
    &:first-child {
      margin-right: inherit;
      padding: 1rem 0;
    }
  }
`;

const CatSmallText = styled.span`
  font-size: 1.2rem;
  padding-right: 2rem;
  cursor: pointer;
  font-weight: 500;
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 980px) {
    font-size: 1rem;
    padding: 0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const categories = ["Software dev", "Engineering", "ML", "All"];

const AllProjects = ({ allPosts }) => {
  const [cat, setCat] = useState("All");

  return (
    <div>
      <Navbar />
      <CategoryNav>
        <CatNav>
          <CatBigText>BROWSE PROJECTS BY</CatBigText>
        </CatNav>
        {categories.map((category, index) => (
          <CatNav key={index} onClick={() => setCat(category)}>
            <CatSmallText selected={category === cat}>{category}</CatSmallText>
          </CatNav>
        ))}
        <CatNav>
          <CatSmallText>{cat}</CatSmallText>
          <ion-icon size="large" name="chevron-down-outline"></ion-icon>
        </CatNav>
      </CategoryNav>
      <CardContainer>
        {allPosts
          ? allPosts
              .filter((post) => (cat === "All" ? post : post.category === cat))
              .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
              .map((post, index) => (
                <MediumCard
                  key={index}
                  image={post.coverImage || "/images/project.webp"}
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
  const allPosts = getAllPosts([
    "title",
    "category",
    "date",
    "slug",
    "coverImage",
  ]);
  return {
    props: { allPosts },
  };
}

export default AllProjects;
