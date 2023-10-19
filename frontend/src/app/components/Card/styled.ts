import styled from 'styled-components'

export const CardContainer = styled.div`
  img {
    width: 250px;
    height: 320px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const CardContent = styled.div`
  max-width: 280px;
  height: 25vh;
  max-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`
