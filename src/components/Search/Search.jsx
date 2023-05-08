import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { ROOT_URL, geoApiOptions } from "../../constants/geoApi";
import styled from "styled-components";

function Search({ onChange, search }) {
  const Select = styled(AsyncPaginate).attrs({
    styles: {
      control: (provided) => ({
        ...provided,
        backgroundColor: "var(--colors-ui)",
        color: "var(--colors-text)",
        borderRadius: "10px",
        border: "none",
        height: "37px",
        width: "190px",
      }),
      option: (provided, state) => ({
        ...provided,
        color: 'black'
      }),
    },
  })`
    color: var(--colors-text);
  `;

  const loadOptions = (inputValue) => {
    return fetch(
      `${ROOT_URL}/cities?minPopulation=10000&namePrefix=${inputValue}&languageCode=ru`,
      geoApiOptions
    )
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Select
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={onChange}
        loadOptions={loadOptions}
      />
    </>
  );
}

export default Search;
