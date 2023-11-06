import styled, { css } from 'styled-components'

export const CardContainer = styled.div<{ variable: 'modal' | 'default' }>`
padding: 25px;
border-radius: 8px;
background:${({ theme }) => theme['gray-900']} ;

  ${({ variable }) =>
    variable === 'modal' &&
    css`
      background: ${({ theme }) => theme['gray-900']};
      display: flex;
      width: 100%;
      padding: 20px;
      align-items: center;
      justify-content: space-between;
      border-radius: 8px;
    `}
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
export const CardContent = styled.div<{ variable: 'modal' | 'default' }>`
  color: ${({ theme }) => theme['gray-300']};
  .linkpage{
    padding: 8px;
    color: white;
    background-color: black;
    border: solid white 1.5px;
    border-radius: 8px;
    padding: 12px;
    margin-top: 10px;
  }
  ${({ variable }) =>
    variable === 'default' &&
    css`
      color: white;
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
    `}
  ${({ variable }) =>
    variable === 'modal' &&
    css`
      display: flex;
      flex-direction: column;
      padding: 20px;
      height: 300px;
      width: 70%;
      justify-content: space-around;
      align-items: center;
    `}
`
