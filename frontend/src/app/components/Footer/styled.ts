import styled from "styled-components"

export const FooterContainer = styled.footer`
padding: 0rem 0.5rem;
border-top:1px solid lightGray;
min-height: 400;
`
export const FooterContent = styled.div`
width:100%;
max-width:1200px;
margin:0 auto;
padding:0 1.5rem; //se a tela for menor  de 1200 px vai da um espacamento
display:flex;
justify-content:space-between;
align-items:center;
height:64px;
color:gray;
font-size:14px;
min-height: 200px;
a{
  text-decoration: none;
  color: gray ;
}
div{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

}

`
export const FooterBotton =styled.div`
padding:0 1.5rem;
margin: 0 auto;
min-height: 80px;
display: flex;
justify-content: space-between;
max-width:1200px;
width: 100%;
align-items: baseline;
.theme-toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.sun-moon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  transition: background-color 0.3s;
}
div{
  gap: 0.5rem;
}
div.logos{
  display: flex;
  align-items: center;
  justify-content: center;
}

`
export const ThemeToggle = styled.div`
  cursor: pointer;
  position: relative;
  width: 80px;
  background-color: darkblue;
  border-radius: 20px;
  padding: 4px;
  height: 35px;
  border: solid black 2px;
  transition:  1.2s;
  
  &.sky-actived {
    background-color: lightblue;
    transition: 1.2s;
  }
`;

export const SunMoonIcon = styled.div`
  position: absolute;
  width:24px;
  height: 24px;
  border-radius: 50%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  transition: 1.2s;
  transform: translateX(5%);
  &.sum-moon{
    transform: translateX(5%);
    transition: 1.2s;
  }
  
  &.sun-moon-actived {
    background-color: yellow;
    transform: translateX(180%);
    transition:  1.2s;
  }
`;
