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
      <ion-icon
        size="large"
        name="logo-linkedin"
        style={{ padding: "1rem", cursor: "pointer" }}
      ></ion-icon>
      <ion-icon
        size="large"
        name="logo-github"
        style={{ padding: "1rem", cursor: "pointer" }}
      ></ion-icon>
      <ion-icon
        size="large"
        name="mail-outline"
        style={{ padding: "1rem", cursor: "pointer" }}
      ></ion-icon>
    </StyledFooter>
  );
};

export default Footer;
