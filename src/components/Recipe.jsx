import React, { useState, useEffect, useRef } from "react";
import "../blocks/recipe.css";
import blueCursor from "../assets/images/blueCursor.svg";
import blueCursorHover from "../assets/images/blueCursorHover.svg";

function Recipe({
  recipeImage,
  recipeName,
  recipeDescription,
  isOverlay,
  addOverlayRecipe,
  removerOverlayRecipe,
}) {
  const [recipeStyle, setRecipeStyle] = useState({ transform: `scale(1)` });

  const flipRecipe = (e) => {
    e.preventDefault();
    if (isOverlay) {
      return;
    }
    addOverlayRecipe();
    setRecipeStyle({
      cursor: `url(${blueCursor}), auto`,
      position: "fixed",
      top: "35%",
      right: "0px",
      bottom: "0px",
      left: "0px",
      transform: `scale(2)`,
      zIndex: "3",
      maxWidth: "500px",
    });
  };

  const hoverRecipe = () => {
    if (!isOverlay) {
      setRecipeStyle({
        cursor: `url(${blueCursorHover}), pointer`,
        transform: "translateY(-15px)",
      });
    }
  };
  const unHoverRecipe = () => {
    if (!isOverlay) {
      setRecipeStyle({
        // cursor: `url(${blueCursor}), pointer`,
        transform: "translateY(0px)",
        zIndex: "0",
      });
    }
  };

  useEffect(() => {
    if (!isOverlay) {
      removerOverlayRecipe();
      setRecipeStyle({
        transform: `scale(1)`,
      });
    }
  }, [isOverlay]);

  return (
    <div
      className="recipe__item"
      style={recipeStyle}
      onClick={flipRecipe}
      onMouseOver={hoverRecipe}
      onMouseLeave={unHoverRecipe}
    >
      {!isOverlay ? (
        <>
          <img
            className="recipe-list_image"
            src={recipeImage}
            alt={recipeName}
          ></img>
          <p className="recipe-list_title">{recipeName}</p>
        </>
      ) : (
        <>
          {" "}
          <p className="recipe-list_description">{recipeDescription}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
