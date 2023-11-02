import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 0rem 0.5rem;
  background: ${props => props.theme['gray-900']};
`
export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem; //se a tela for menor  de 1200 px vai da um espacamento
  display: flex;
  align-items: center;
  gap: 1rem 2rem;
  color: ${({theme})=> theme['orange-01']};
  font-size: 14px;
  min-height: 200px;

  a {
    text-decoration: none;
    color: ${({theme})=> theme['orange-01']};
  }
  div {
    display: flex;
    flex-direction: column;
  }
  .social {
    gap: 0.8rem;
  }
  .about {
    gap: 0.9rem;
    a {
      display: flex;
      align-items: center;
      height: 32px;
    }
  }
`
