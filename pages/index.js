import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import BigCard from "../components/BigCard";
import CategoryCard from "../components/CategoryCard";

const StyledNavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 5rem 2rem 3rem 2rem;
  display: flex;
`;

const NameLogo = styled.li`
  margin-right: auto;
  font-size: 2rem;
`;

const StyledNavButton = styled.li`
  padding: 0 0.5rem;
  font-size: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const HeroBox = styled.div`
  height: 38rem;
  display: flex;
  justify-content: center;
`;

const IntroBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const IntroText = styled.p`
  font-size: 1.5rem;
  text-align: left;
  width: 30rem;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageBox = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  transform: translateY(3rem);
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50rem;
  padding: 8rem 1rem 1rem 2rem;
  background: ${(props) => props.bgcolor};
`;

const ContentTitle = styled.span`
  font-size: 3rem;
`;

const CategoryBox = styled.div`
  display: flex;
  align-self: center;
`;

const Footer = styled.footer`
  display: flex;
  border-top: 1px solid #eff2f2;
  padding: 1rem;
  justify-content: center;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jerron's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <StyledNavBar>
          <NameLogo>Jerron Lim</NameLogo>
          <StyledNavButton>
            <span>Resume</span>
          </StyledNavButton>
          <StyledNavButton>
            <span>Projects</span>
          </StyledNavButton>
        </StyledNavBar>
        <HeroBox>
          <IntroBox>
            <IntroText>
              Hi, my name is Jerron. I am an engineer working in LTA.
              <br />
              <br />
              During my spare time, I like to work on personal software projects
              and experiment with ML models.
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
          <BigCard
            image="/images/project.webp"
            title="This is the title of a cool project"
            bgcolor="#fac"
            animate="false"
          />
        </ContentBox>
        <ContentBox>
          <ContentTitle>Projects by categories</ContentTitle>
          <CategoryBox>
            <CategoryCard title="Web development" desc="Building web apps." />
            <CategoryCard
              title="Machine Learning"
              desc="Experimenting with ML models"
            />
            <CategoryCard
              title="Mechanical Engineering"
              desc="Hardware projects"
            />
            <CategoryCard title="Bots" desc="Building bots on Telegram" />
          </CategoryBox>
        </ContentBox>
        <ContentBox>
          <ContentTitle>Recent projects</ContentTitle>
          <BigCard
            image="/images/project.webp"
            title="This is the title of a cool project"
            bgcolor="#1d9696"
            animate="true"
          />
          <BigCard
            image="/images/project.webp"
            title="This is the title of a cool project"
            bgcolor="#d3770a"
            animate="true"
          />
          <BigCard
            image="/images/project.webp"
            title="This is the title of a cool project"
            bgcolor="#5c1e62"
            animate="true"
          />
          <span style={{ alignSelf: "flex-end", padding: "1rem" }}>
            See more projects &rarr;
          </span>
        </ContentBox>
        <Footer>
          <span>Linkedin</span>
          <span>Email</span>
        </Footer>
      </main>
    </div>
  );
}
