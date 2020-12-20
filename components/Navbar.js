import styled from "styled-components";
import { useState } from "react";
import Link from "next/Link";

const StyledNavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 5rem 2rem 3rem 2rem;
  display: flex;
`;

const NameLogo = styled.li`
  margin-right: auto;
  font-size: 2rem;
  color: #465a69;
  cursor: pointer;

  @media only screen and (max-width: 980px) {
    font-size: 1.2rem;
  }
`;

const Navigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #344854;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, visibility 0.2s;

  ${(props) =>
    !props.isEnabled
      ? `
    transform: translateY(-100vh);
    visibility: hidden;
  `
      : `transform: translateY(0);
        visibility: visible;
      `}
`;

const FullNavButton = styled.span`
  color: white;
  font-size: 5rem;
  padding-bottom: 2rem;
  cursor: pointer;
`;

const StyledNavButton = styled.li`
  padding: 0 0.5rem;
  font-size: 1.5rem;
  color: #465a69;
  cursor: pointer;

  &:last-child {
    display: none;
  }

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 980px) {
    display: none;

    &:last-child {
      display: block;
    }
  }
`;

//TODO: NavScreen does not close if click on link twice.

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <StyledNavBar>
        <NameLogo>
          <Link href="/">Jerron Lim</Link>
        </NameLogo>
        <StyledNavButton>
          <Link href="/resume">
            <a>Resume</a>
          </Link>
        </StyledNavButton>
        <StyledNavButton>
          <Link href="/projects/all">
            <a>Projects</a>
          </Link>
        </StyledNavButton>
        <StyledNavButton onClick={() => setOpenMenu(true)}>
          <ion-icon size="large" name="menu-outline" />
        </StyledNavButton>
      </StyledNavBar>
      <Navigation isEnabled={openMenu}>
        <ion-icon
          onClick={() => setOpenMenu(false)}
          style={{
            fontSize: "5rem",
            position: "absolute",
            right: "0",
            top: "0",
            margin: "2rem",
            padding: "1rem",
            color: "white",
          }}
          name="close-outline"
        ></ion-icon>
        <FullNavButton>
          <Link onClick={() => setOpenMenu(false)} href="/">
            Home
          </Link>
        </FullNavButton>
        <FullNavButton>
          <Link onClick={() => setOpenMenu(false)} href="/resume">
            <a>Resume</a>
          </Link>
        </FullNavButton>
        <FullNavButton>
          <Link onClick={() => setOpenMenu(false)} href="/projects/all">
            <a>Projects</a>
          </Link>
        </FullNavButton>
      </Navigation>
    </>
  );
};

export default Navbar;
