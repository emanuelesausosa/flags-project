import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  width: 264px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  text-align: left;
  overflow: hidden;
  border-radius: 5px;
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .details {
    padding: 1.5em;
  }

  h2 {
    margin: 0;
    margin-botton: 1rem;
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-size: 0.9em;
    margin-botton: 0.5rem;
  }
`;

function Country({ flag, name, population, region, capital }) {
  return (
    <CountryStyled>
      <img src={flag} alt="flag" />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
