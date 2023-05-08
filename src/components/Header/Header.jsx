import React from "react";
import { useState, useEffect } from "react";
import { RiContrastDropFill } from "react-icons/ri";
import { Container, Section } from "./styledHeader";
import Search from "../Search/Search";

function Header({ onSearchChange, translate }) {
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState(null);


  const handleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Container>
      <Section>
        <img src="./assets/Headerlogo.png" alt="logo" />
        <h2>REACT WEATHER</h2>
      </Section>
      <Section>
        <RiContrastDropFill
          cursor="pointer"
          color="#4793FF"
          size="23.3px"
          onClick={handleTheme}
        />
        <Search onChange={handleOnChange} search={search} />
      </Section>
    </Container>
  );
}

export default Header;
