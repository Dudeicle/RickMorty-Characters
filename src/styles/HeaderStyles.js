import styled from "styled-components";

export const HeaderStyle = styled.div`
  background-color: hsla(0, 0%, 0%, 0.8);
  border: 2px solid rgb(60, 62, 68);
  text-align: center;
  color: whitesmoke;
  font-size: 1.8rem;
  width: 95%;
  margin: 2%;
  border-radius: 1rem;

  @media (max-width: 360px) {
    margin: 1%;
    font-size: 1rem;
    width: 100%;
  }
`;
