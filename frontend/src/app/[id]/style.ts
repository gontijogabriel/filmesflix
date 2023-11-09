import styled from 'styled-components'

export const IdContainer = styled.main`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  background: black;
  `
export const IdContent = styled.div`
min-height: calc(100vh - 266px);
max-width: 1200px;
display: flex;
justify-content: center;
gap: 2rem;
padding: 20px;
color: lightgray;

img{
  width: 50%;
  height: 50%;
  max-width: 60vw;
  max-height: 80vh;
  border-radius: 8px;
}
 
  div.container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 63%;
    border-radius: 8px;
    background: ${props => props.theme['gray-900']};
    gap: 2rem;
    padding: 20px;
    .buttons{
      display: flex;
      justify-content: flex-end;
      align-items: baseline;
      gap: 2rem;
      width: 100%;
      margin-top: 120px;
      button{
        background: black;
        color: white;
        padding: 15px;
        border-radius: 8px;
        border: solid white 1.5px;
      }
    }
  }
  .content{
    display: flex;
    align-items: center;
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
    align-items: center;
    flex-wrap: wrap;
    
    gap: 0.8rem;
    padding: 0;
  }
`
