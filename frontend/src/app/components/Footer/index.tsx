import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";
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
          <a href="#">Gabriel Gontijo</a>
          <a href="#">Elias F Martins</a>
          <a href="#">Felipe Daniel</a>
        </div>
        <div className="social">
          <h4>Social-Media</h4>
          <a href="#"><InstagramLogo size={32} /> <LinkedinLogo size={32} /> <GithubLogo size={32} /></a>
          <a href="#"><InstagramLogo size={32} /> <LinkedinLogo size={32} /> <GithubLogo size={32} /></a>
          <a href="#"><InstagramLogo size={32} /> <LinkedinLogo size={32} /> <GithubLogo size={32} /></a>
        </div>


      </FooterContent>
    </FooterContainer>
  );
};
