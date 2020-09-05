import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  flex-direction: row;

  width: 85%;
  margin: 2%;
  border: 2px solid rgb(60, 62, 68);
  box-shadow: 20px 5px 4px black;
  background-color: hsla(0, 0%, 0%, 0.8);

  border-radius: 10rem;

  img {
    border-radius: 10rem;
    border: 7px solid black;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    box-shadow: 5px 5px 4px black;
    margin: 2%;
    margin-bottom: 10%;
    width: 95%;
    padding-bottom: 50px;
  }
`;

export const ParaStyle = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 1%;

  p {
    width: 30%;
    margin: 0.75rem;
    font-size: 1.2rem;
    color: rgb(255, 152, 0);
    letter-spacing: 1.5px;
  }

  @media (max-width: 360px) {
    margin: 4%;
    width: 92%;
    justify-content: center;

    p {
      text-align: center;
      width: 75%;
      margin: 0%;
      font-size: 0.7rem;
    }
  }
`;
