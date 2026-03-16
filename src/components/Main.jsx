import React, { useState, useEffect, useRef } from "react";
import "../blocks/main.css";

import RecipeList from "./RecipeListGrid";
function Main() {
  return (
    <section className="main space">
      <RecipeList></RecipeList>
    </section>
  );
}

export default Main;
