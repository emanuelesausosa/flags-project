import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./country";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  justify-content: center;
  padding: 4em 2em;
`;

export default function CountryList() {
  const [countryList, setContryList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContryList(data);
      })
      .catch(() => {
        console.log("hubo un error");
      });
  }, []);

  return (
    <CountryListStyled>
      {countryList.map((country) => {
        return (
          <Country
            key={country.alpha2Code}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        );
      })}
    </CountryListStyled>
  );
}
