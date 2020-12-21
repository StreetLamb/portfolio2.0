import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";

const StyledNavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s;
  background: white;
  z-index: 2;

  ${(props) =>
    props.toHide &&
    css`
      top: -10rem;
    `}
`;

const NameLogo = styled.li`
  margin-right: auto;
  font-size: 2rem;
  color: #465a69;
  cursor: pointer;
  align-self: center;

  @media only screen and (max-width: 980px) {
    font-size: 1.2rem;
  }
`;

const Navigation = styled.div`
  position: fixed;
  top: -100vh;
  left: 0;
  right: 0;
  height: 100vh;
  background: #344854;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transition: transform 0.5s, visibility 0.5s;

  ${(props) =>
    props.isEnabled
      ? `transform: translateY(100vh);
        visibility: visible;
      `
      : null}
`;

const FullNavButton = styled.span`
  color: white;
  font-size: 3rem;
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

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || currentScrollPos < 20) {
        setHide(false);
      } else {
        setHide(true);
      }
      prevScrollpos = currentScrollPos;
    };
  });

  return (
    <>
      <StyledNavBar toHide={hide}>
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
        <a onClick={() => setOpenMenu(false)}>
          <ion-icon
            style={{
              fontSize: "4rem",
              position: "absolute",
              right: "0",
              top: "0",
              margin: ".5rem",
              padding: "0 .5rem",
              color: "white",
            }}
            name="close-outline"
          ></ion-icon>
        </a>

        <FullNavButton onClick={() => setOpenMenu(false)}>
          <Link href="/">Home</Link>
        </FullNavButton>
        <FullNavButton onClick={() => setOpenMenu(false)}>
          <Link href="/resume">
            <a>Resume</a>
          </Link>
        </FullNavButton>
        <FullNavButton onClick={() => setOpenMenu(false)}>
          <Link href="/projects/all">
            <a>Projects</a>
          </Link>
        </FullNavButton>
      </Navigation>
    </>
  );
};

export default Navbar;
