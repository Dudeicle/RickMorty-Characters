import styled from "styled-components";

export const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
`;

export const PageButtonStyle = styled.div`
  display: flex;
  align-self: center;
  border: 1px solid black;
  background-color: hsla(0, 0%, 0%, 0.8);
  border-radius: 1rem;
  margin-bottom: 0.5%;

  button {
    margin: 1rem;
    border-radius: 0.5rem;
    background-color: brown;
    border: 2px solid black;
    color: rgb(255, 152, 0);
    padding: 10px;
    font-weight: bold;
    text-shadow: 2px 2px 0px black;
  }
`;
