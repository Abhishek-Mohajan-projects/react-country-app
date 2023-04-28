import React from "react";
import style from "./country.module.css";

const Country = (props) => {
  const { name, flags, population, capital, area } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={style.flags} />
        <h2>Name: {name.common}</h2>
        <h3>Population : {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area : {area}</h3>
        <button
          className={style.btn}
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
