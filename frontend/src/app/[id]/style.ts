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
  justify-content: space-evenly;
  padding: 20px;
  div {
    width: 50%;
    background:  ${props => props.theme["green-700"]};
  }
`
