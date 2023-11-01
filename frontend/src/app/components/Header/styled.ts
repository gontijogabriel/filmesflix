'use client'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.5rem;
  border-bottom: 1px solid lightGray;
  background: ${({ theme }) => theme['gray-900']};
  color: ${({ theme }) => theme['orange-01']};
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  color: ${({ theme }) => theme['orange-01']};
  font-size: 14px;
  white-space: nowrap;
  a {
    text-decoration: none;
  }
  h2 {
    color: ${({ theme }) => theme['orange-01']};

    margin-right: 10px;
  }

  li {
    color: ${({ theme }) => theme['orange-01']};
  }
  input {
    width: 251px;
    height: 35px;
    padding: 0 6px 0 8px;
    background: #f2f2f2;
    color: gray;
    border-radius: 8px;
    font-size: 15px;
    border: none;
  }

  span {
    position: absolute;
    right: 5px;
    top: 5px;
  }

  .acessar {
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    color: gray;
    background: none;
    border: none;
    cursor: pointer;
  }
  .acessar:hover {
    text-decoration: underline;
  }
  div {
    display: flex;
    gap: 1rem;
    position: relative;
  }
  div.input {
    margin: 0 15px;
  }
  input:focus {
    outline: none;
  }
  .assine {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 8px;
    border: none;
    padding: 12px;
    font-weight: bold;
  }
  .assine:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
  li {
    transition: 0.6s;
    border: solid transparent 1px;
    padding: 5px;
  }
  nav {
    display: flex;
    align-items: center;
    z-index: 2000;
  }
  .mobile {
    visibility: hidden;
  }
  .active-link {
    font-weight: bold;
    border: solid transparent 1px;
    border-bottom: solid 1px ${({ theme }) => theme['orange-01']};
  }
  button.mobile {
    display: none;
  }
  @media (max-width: 1075px) {
    div.button {
      display: none;
    }
    button.mobile {
      display: flex;
    }
    .mobile {
      visibility: visible;
      position: relative;
      display: flex;
      flex-direction: column;
      border: none;
      background: transparent;
      gap: 0.3rem;
      hr {
        width: 40px;
        border-radius: 20px;
        padding: 2px;
        background-color: gray;
        transition: 1.2s;
      }
    }
    li:hover {
      color: black;
      letter-spacing: 2px;
    }
    nav.actived {
      display: flex;
      align-items: center;
      justify-content: center;
      height: calc(100vh - 64px);
      visibility: visible;
      transition: 1.2s;
      overflow: hidden;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 0;
        margin: 0 1rem;
        min-width: 300px;
        border-bottom: 2px solid lightgray;
      }
      ul {
        display: flex;
        flex-direction: column;
      }
    }
    div.input {
      visibility: visible;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      position: absolute;
      top: 65px;
      right: 0;
      height: 0;
      overflow-y: hidden;
      background: white;
      transition: 1.2s;
      ul {
        display: flex;
        flex-direction: column;
      }
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 0;
        margin: 0 1rem;
        min-width: 300px;
        border-bottom: 2px solid lightgray;
      }
    }
    div.input {
      display: block;
      margin: 0 15px;
      visibility: visible;
    }
    button.mobile.actived {
      position: relative;
      hr.one {
        transform: rotate(405deg);
        position: relative;
        bottom: -14px;
      }
      hr.two {
        background: transparent;
        border: transparent;
      }
      hr.tree {
        transform: rotate(-405deg);
        position: relative;
        top: -7px;
      }
    }
  }
`
