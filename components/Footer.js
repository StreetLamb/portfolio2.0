import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledFooter = styled.footer`
  display: flex;
  border-top: 1px solid #eff2f2;
  padding: 1rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CopyrightText = styled.span`
  font-size: 0.8rem;
  margin-top: 1rem;
  text-align: center;
  color: #465a69;
`;

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("null");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <StyledFooter>
      <div>
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
      </div>
      <CopyrightText>
        Copyright &#169; {currentYear} Jerron Lim. All rights reserved.
      </CopyrightText>
    </StyledFooter>
  );
};

export default Footer;
