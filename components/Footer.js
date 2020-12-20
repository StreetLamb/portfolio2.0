import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  border-top: 1px solid #eff2f2;
  padding: 1rem;
  justify-content: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a
        href="https://www.linkedin.com/in/jerron-lim/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ion-icon
          size="large"
          name="logo-linkedin"
          style={{ padding: "1rem", cursor: "pointer" }}
        />
      </a>
      <a
        href="https://github.com/StreetLamb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ion-icon
          size="large"
          name="logo-github"
          style={{ padding: "1rem", cursor: "pointer" }}
        />
      </a>

      <a
        href="mailto:l.y.z.jerron@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ion-icon
          size="large"
          name="mail-outline"
          style={{ padding: "1rem", cursor: "pointer" }}
        />
      </a>
    </StyledFooter>
  );
};

export default Footer;
