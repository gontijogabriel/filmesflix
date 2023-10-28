'use client'
import styled from 'styled-components'

export const PageContainer = styled.main``

export const PageContent = styled.div`
  min-height: calc(100vh - 350px);
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
  flex-direction: column;
  padding: 20px;
  .searchinput {
    width: 80%;
    height: 35px;
    padding: 0 6px 0 8px;
    background: #f2f2f2;
    color: gray;
    border-radius: 8px;
    font-size: 15px;
    border: none;
    position: relative;
    outline: none;
  }
  .pesquisa {
    position: absolute;
    right: 125px;
    top: 3px;
    z-index: 50;
    border: none;
  }
  div.input {
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 1rem;
    position: relative;
  }
  .cards-content {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`
