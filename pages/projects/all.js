import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import MediumCard from "../../components/MediumCard";

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

const AllProjects = () => {
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
        {/* <CatBigText>BROWSE PROJECTS BY</CatBigText>
        <CatSmallTextBox>
          <CatSmallText>Web dev</CatSmallText>
          <CatSmallText>ML</CatSmallText>
          <CatSmallText>Engineering</CatSmallText>
          <CatSmallText>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </CatSmallText>
        </CatSmallTextBox> */}
      </CategoryNav>
      <CardContainer>
        <MediumCard
          image="/images/project.webp"
          bgcolor="#1d9696"
          category="Web dev"
          title="Pretty cool project"
          date="Dec 2020"
        />
        <MediumCard
          image="/images/project.webp"
          bgcolor="#1d9696"
          category="Web dev"
          title="Pretty cool project"
          date="Dec 2020"
        />
        <MediumCard
          image="/images/project.webp"
          bgcolor="#1d9696"
          category="Web dev"
          title="Pretty cool project"
          date="Dec 2020"
        />
        <MediumCard
          image="/images/project.webp"
          bgcolor="#1d9696"
          category="Web dev"
          title="Pretty cool project"
          date="Dec 2020"
        />
        <MediumCard
          image="/images/project.webp"
          bgcolor="#1d9696"
          category="Web dev"
          title="Pretty cool project"
          date="Dec 2020"
        />
        <MediumCard
          image="/images/project.webp"
          bgcolor="#1d9696"
          category="Web dev"
          title="Pretty cool project"
          date="Dec 2020"
        />
      </CardContainer>
      <Footer />
    </div>
  );
};

export default AllProjects;
