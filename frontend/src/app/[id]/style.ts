import styled from 'styled-components'

export const IdContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
`
export const IdContent = styled.div`
  min-height: calc(100vh - 266px);
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 20px;
  div.container {
    display: flex;
    flex-direction: column;
    width: 60%;
    background: ${props => props.theme['gray-100']};
    gap: 2rem;
    padding: 20px;
  }
  .class {
    display: flex;
    flex-direction: column;
  }
  .options {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  .circle {
    border-radius: 50%;
    height: 50px;
    width: 55px;
    color: white;
    background-color: turquoise;
    border: none;
  }
  .info {
    display: flex;

    padding: 0;
  }
`
