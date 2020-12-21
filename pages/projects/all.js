import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled, { css } from "styled-components";
import MediumCard from "../../components/MediumCard";
import { getAllPosts } from "../../lib/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const CategoryNav = styled.div`
  display: flex;
  flex-direction: column;
  background: #f1f4f7;
`;

const CategoryList = styled.ul`
  display: flex;
  height: 15vh;
  background: #f1f4f7;
  align-items: center;
  list-style-type: none;

  @media only screen and (max-width: 980px) {
    padding: 1rem;
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
  }
`;

const DropdownNav = styled.div`
  dsplay: flex;
  flex-direction: column;
  padding: 0 2rem 1rem 2rem;
  animation: dropdown 0.5s;

  @keyframes dropdown {
    0% {
      opacity: 0;
    }

    100% {
      opacity 1;
    }
  }
`;

const DropdownNavItem = styled.div`
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #465a69;
  transition: background 0.2s, color 0.2s;

  &:active {
    background: #344f63;
    color: white;
  }

  @media only screen and (max-width: 480px) {
    justify-items: center;
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

const StyledIcon = styled.div`
  transform: rotate(0deg);
  transition: transform 0.2s;

  ${(props) =>
    props.rotate &&
    css`
      transform: rotate(180deg);
    `}
`;

const categories = ["Software dev", "Engineering", "ML", "All"];

const AllProjects = ({ allPosts }) => {
  const router = useRouter();
  const [cat, setCat] = useState(router.query.cat || "All");
  const [catNav, setCatNav] = useState(false);

  useEffect(() => {
    router.push(`/projects/all?cat=${cat}`, undefined, { shallow: true });
  }, [cat]);

  return (
    <div>
      <Navbar />
      <CategoryNav style={{ background: "#f1f4f7" }}>
        <CategoryList>
          <CatNav>
            <CatBigText>BROWSE PROJECTS BY</CatBigText>
          </CatNav>
          {categories.map((category, index) => (
            <CatNav key={index} onClick={() => setCat(category)}>
              <CatSmallText selected={category === cat}>
                {category}
              </CatSmallText>
            </CatNav>
          ))}
          <CatNav onClick={() => setCatNav(!catNav)}>
            <CatSmallText>{cat}</CatSmallText>
            <StyledIcon rotate={catNav ? 1 : 0}>
              <ion-icon size="large" name="chevron-down-outline"></ion-icon>
            </StyledIcon>
          </CatNav>
        </CategoryList>
        {catNav ? (
          <DropdownNav>
            {categories.map((category, index) => (
              <DropdownNavItem
                key={index}
                onClick={() => {
                  setCat(category);
                  setCatNav(false);
                }}
              >
                <span>{category}</span>
              </DropdownNavItem>
            ))}
          </DropdownNav>
        ) : null}
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
