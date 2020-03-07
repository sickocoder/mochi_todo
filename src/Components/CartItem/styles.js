import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  cursor: pointer;

  font-size: 1.15em;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  :hover {
    background: #bdc3c7;
    background: -webkit-linear-gradient(to right, transparent, #bdc3c7);
    background: linear-gradient(to right, transparent, #bdc3c7);
  }

  :hover div.back {
    opacity: 1;
  }

  :hover div.up {
    left: 120px;
  }

  div {
    width: 100%;
    padding: 16px 0;

    transition: all 0.3s ease-in-out;
  }

  div button {
    margin-right: 16px;
    padding: 8px;

    background-color: #3cb371;
    border: none;
    border-radius: 20px;
  }

  div button:last-child {
    background-color: red;
  }

  div.up {
    height: 100%;
    display: flex;
    padding: 0;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
  }

  div.up > div {
    height: 100%;
    display: flex;

    flex-direction: column;
    align-content: flex-start;
  }

  div.up > div h4,
  h5 {
    font-weight: 500;
  }

  div.up > div h5 {
    opacity: 0.6;
  }

  div.up img {
    width: 40px;
    height: 40px;
    margin-top: 4px;
    margin-right: 16px;

    border: none;
    border-radius: 20px;
  }

  div.back {
    opacity: 0;
  }
`;
