import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/Link";
import BigCard from "../components/BigCard";
import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAllPosts } from "../lib/api";

const HeroBox = styled.div`
  height: 38rem;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

const IntroBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 1rem;
`;

const IntroText = styled.span`
  font-size: 1.5rem;
  text-align: left;
  width: 30rem;
  color: #465a69;
  line-height: 2.5rem;

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageBox = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  transform: translateY(3rem);

  @media only screen and (max-width: 980px) {
    flex: 2;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 40rem;
  padding: 8rem 1rem 4rem 2rem;
  background: ${(props) => props.bgcolor};

  @media only screen and (max-width: 980px) {
    padding: 8rem 1rem;
  }
`;

const ContentTitle = styled.span`
  font-size: 3rem;
  color: #465a69;

  @media only screen and (max-width: 480px) {
    font-size: 2rem;
    overflow: hidden;
  }
`;

const CategoryBox = styled.div`
  display: flex;
  align-self: center;
  @media only screen and (max-width: 980px) {
    flex-direction: column;
    width: 100%;
  }
`;

const SeeMoreText = styled.span`
  align-self: flex-end;
  padding: 1rem;
  font-size: 1.5rem;
  color: #465a69;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const categories = {
  "Software dev": "Software projects consisting of web dev, app dev and bots.",
  Engineering: "Hardware and mechanical design projects.",
  ML: "Data exploration using ML and deep learning models.",
};

export default function Home({ allPosts }) {
  const featuredPosts = allPosts.filter((post) => post.featured === "True");

  return (
    <div>
      <Head>
        <title>Jerron's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule=""
          src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.js"
        ></script>
      </Head>
      <main>
        <Navbar />
        <HeroBox>
          <IntroBox>
            <IntroText>
              Hi, my name is Jerron. I am currently an engineer in LTA's
              Intelligent Transport Systems Development division.
              <br />
              <br />
              This site keeps track of my personal projects and my thoughts
              after working on them.
            </IntroText>
          </IntroBox>
          <ImageBox>
            <StyledImage
              src="/images/big-sur.jpg"
              alt="image of big sur"
              layout="fill"
            />
          </ImageBox>
        </HeroBox>
        <ContentBox bgcolor="#f1f4f7">
          <ContentTitle>Noteworthy projects</ContentTitle>
          {featuredPosts
            ? featuredPosts.map((post, index) => (
                <BigCard
                  key={index}
                  image={post.coverImage || "/images/project.webp"}
                  title={post.title}
                  date={post.date}
                  slug={post.slug}
                  bgcolor="#1d6e96"
                  animate="false"
                />
              ))
            : null}
        </ContentBox>
        <ContentBox>
          <ContentTitle>Projects by categories</ContentTitle>
          <CategoryBox>
            {Object.keys(categories).map((category, index) => (
              <CategoryCard
                title={category}
                desc={categories[category]}
                key={index}
              />
            ))}
          </CategoryBox>
        </ContentBox>
        <ContentBox>
          <ContentTitle>Recent projects</ContentTitle>
          {allPosts
            ? allPosts
                .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                .slice(0, 3)
                .map((post, index) => (
                  <BigCard
                    key={index}
                    image={post.coverImage || "/images/project.webp"}
                    title={post.title}
                    date={post.date}
                    slug={post.slug}
                    bgcolor={["#1d9696", "#d3770a", "#5c1e62"][index % 3]}
                    animate="true"
                  />
                ))
            : null}
          <Link href="/projects/all">
            <SeeMoreText>See more projects &rarr;</SeeMoreText>
          </Link>
        </ContentBox>
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "excerpt",
    "featured",
    "slug",
    "coverImage",
    "date",
  ]);
  return {
    props: { allPosts },
  };
}
