import { GithubLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import {
  FooterBotton,
  FooterContainer,
  FooterContent,
  SunMoonIcon,
  ThemeToggle,
} from "./styled";
import { useState } from "react";

export const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <FooterContainer>
      <FooterContent>
        <div className="about">
          <h4>About Team</h4>
          <a href="#">Gabriel</a>
          <a href="#">Elias</a>
        </div>

        <div className="More">
          <h4>Social</h4>
          <a href="#">Gabriel</a>
          <a href="#">Elias</a>
        </div>
        <div className="More">
          <h4>Social</h4>
          <a href="#">Gabriel</a>
          <a href="#">Elias</a>
        </div>
        <div className="More">
          <h4>Social</h4>
          <a href="#">Gabriel</a>
          <a href="#">Elias</a>
        </div>
        <div className="More">
          <h4>Social</h4>
          <a href="#">Gabriel</a>
          <a href="#">Elias</a>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};
