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
          <a href="#">Eduardo</a>
          <a href="#">Elias</a>
        </div>

        <div className="More">
          <h4>Social</h4>
          <a href="#">Gabriel</a>
          <a href="#">Eduardo</a>
          <a href="#">Elias</a>
        </div>
        <div className="More">
          <h4>Social</h4>
          <a href="#">Gabriel</a>
          <a href="#">Eduardo</a>
          <a href="#">Elias</a>
        </div>
        <div className="More">
          <h4>Social</h4>
          <a href="#">Gabriel</a>
          <a href="#">Eduardo</a>
          <a href="#">Elias</a>
        </div>
        <div className="More">
          <h4>Social</h4>
          <a href="#">Gabriel</a>
          <a href="#">Eduardo</a>
          <a href="#">Elias</a>
        </div>
      </FooterContent>
      <FooterBotton>
        <div className="icons">
          <h3>© 2023 created.</h3>
          <div className="logos">
            <InstagramLogo size={28} />|
            <GithubLogo size={28} />|
            <TwitterLogo size={28} />
          </div>
        </div>
        {/* <ThemeToggle
          className={isDarkMode ? "sky-actived" : "sky"}
          onClick={toggleTheme}
        >
          <SunMoonIcon
            className={isDarkMode ? "sun-moon-actived" : "sun-moon"}
          />
        </ThemeToggle> */}
      </FooterBotton>
    </FooterContainer>
  );
};
