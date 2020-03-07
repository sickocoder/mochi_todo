import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div.middleSection {
    width: 40%;
    min-width: 320px;
    padding: 16px;

    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  div.middleSection form {
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  input {
    width: 100%;
    padding: 16px;
    font-size: 1.2em;

    border: none;
    border-radius: 2px;
  }

  ul {
    margin-top: 16px;
  }

  .inline {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 16px;
    margin-bottom: 16px;
  }

  .inline input:first-child {
    margin-right: 16px;
  }

  .bottomSection {
    width: 100%;
    margin-top: 16px;
    padding-top: 16px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .btnClearAll {
    min-width: 30%;
    padding: 16px;

    font-size: 1.1em;
    font-weight: 700;

    border: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;

    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .btnClearAll:hover {
    background-color: #ffffff;
  }
`;
