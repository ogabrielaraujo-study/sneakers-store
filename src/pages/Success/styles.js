import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 40px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 32px;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    line-height: 1.8rem;
    text-align: center;
    margin-bottom: 24px;
  }

  .icon-round {
    background: #5f73f1;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
  }

  button,
  a {
    margin-top: 24px;
  }

  button,
  a {
    background: transparent;
    border: 2px solid #5f73f1;
    color: #5f73f1;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s;
    text-decoration: none;

    &:hover {
      background: ${darken(0.05, '#5F73F1')};
      border-color: ${darken(0.05, '#5F73F1')};
      color: #fff;
      transition: all 0.3s;
    }
  }
`
