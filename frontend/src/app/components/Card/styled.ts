import styled, { css } from 'styled-components'

export const CardContainer = styled.div<{ variable: 'modal' | 'default' }>`
  ${({ variable }) =>
    variable === 'modal' &&
    css`
      display: flex;
      width: 100%;
      padding: 20px;
      background: purple;
      align-items: center;
      justify-content: space-between;
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
  ${({ variable }) =>
    variable === 'default' &&
    css`
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
      background: red;
      width: 70%;
      justify-content: space-around;
      align-items: center;
    `}
`
