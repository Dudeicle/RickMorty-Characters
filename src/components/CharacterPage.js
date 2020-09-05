import React, { useEffect, useState } from "react";
import axios from "axios";

// REDUX IMPORTS //
import CharacterCard from "./cardComponents/CharacterCard.js";

// STYLE IMPORTS //
import {
  PageStyle,
  PageButtonStyle,
} from "../styles/characterStyles/CharacterPageStyles.js";

const CharacterPage = (props) => {
  const [charactersResults, setCharactersResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        setCharactersResults(res.data.results);
      })
      .catch((err) => {
        console.log("error from the axios get", err);
      });
  }, [page]);

  console.log(charactersResults);

  return (
    <PageStyle>
      <PageButtonStyle className="paginationRow">
        <button onClick={() => setPage(page - 5)}>Prev - 5</button>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
        <button onClick={() => setPage(page + 5)}>Next + 5</button>
      </PageButtonStyle>

      <div className="characterList">
        {charactersResults.length === 0 ? (
          <div>Loading....</div>
        ) : (
          charactersResults.map((item) => {
            return <CharacterCard info={item} key={item.id} />;
          })
        )}
      </div>

      <PageButtonStyle className="paginationRow">
        <button onClick={() => setPage(page - 5)}>Prev - 5</button>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
        <button onClick={() => setPage(page + 5)}>Next + 5</button>
      </PageButtonStyle>
    </PageStyle>
  );
};

export default CharacterPage;
