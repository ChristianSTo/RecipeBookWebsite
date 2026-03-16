import { useState } from "react";
import "../blocks/filter.css";
import meatIcon from "../assets/images/meatIcon.svg";
import dessertIcon from "../assets/images/dessertIcon.svg";
import drinkIcon from "../assets/images/drinkIcon.svg";

function Filter({ filterByAll, filterByBake, filterByMeal, filterBySauce }) {
  return (
    <div className="filter__container">
      <button className="filter__button" onClick={filterByAll}>
        All
      </button>
      <button className="filter__button" onClick={filterByBake}>
        <img className="filter__icon" src={dessertIcon}></img>
      </button>
      <button className="filter__button" onClick={filterByMeal}>
        <img className="filter__icon" src={meatIcon}></img>
      </button>
      <button className="filter__button" onClick={filterBySauce}>
        <img className="filter__icon" src={drinkIcon}></img>
      </button>
    </div>
  );
}

export default Filter;
