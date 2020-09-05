import React from "react";

// STYLES IMPORTS //

import {
  CardStyle,
  ParaStyle,
} from "../../styles/characterStyles/CharacterCardStyles.js";

// set width and height, 600px and 220px? not sure i want to do the same
// they include, the picture, Name, living status, last known location, and first seen in.

// overflow: hidden? idk what that means so I'll have to look into it
// go into the rick and morty app project and grab that good rick and morty picture from it, or maybe find some new ones online? idk we will see about that as well

// HEADER top of page! - font-size 5rem & font-weight 900

const CharacterCard = (props) => {
  let idVal = "";

  if (props.info.id < 10) {
    idVal = "Character#: 00" + props.info.id.toString();
  } else if (props.info.id.toString() < 100) {
    idVal = "Character#: 0" + props.info.id.toString();
  } else {
    idVal = "Character#: " + props.info.id.toString();
  }

  return (
    <CardStyle>
      <img
        src={`https://rickandmortyapi.com/api/character/avatar/${props.info.id}.jpeg`}
        alt="Nah"
      />
      <ParaStyle>
        <p>Name: {props.info.name}</p>
        <br></br>

        <p>{idVal}</p>
        <br></br>

        <p>Status: {props.info.status}</p>
        <br></br>

        <p>Species: {props.info.species}</p>
        <br></br>

        <p>Origin: {props.info.origin.name}</p>
        <br></br>
      </ParaStyle>
    </CardStyle>
  );
};
export default CharacterCard;
