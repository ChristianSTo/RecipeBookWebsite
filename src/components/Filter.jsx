import { useState } from "react";
import "../blocks/filter.css";

function Filter({ filterByAll, filterByBake, filterByMeal, filterBySauce }) {
  return (
    <div className="filter__container">
      <button className="filter__button" onClick={filterByAll}>
        All
      </button>
      <button className="filter__button" onClick={filterByBake}>
        Bakeries
      </button>
      <button className="filter__button" onClick={filterByMeal}>
        Meals
      </button>
      <button className="filter__button" onClick={filterBySauce}>
        Sauces
      </button>
    </div>
  );
}

export default Filter;
