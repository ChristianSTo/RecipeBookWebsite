import { useState, useEffect } from "react";
import Filter from "./Filter";
import "../blocks/recipeListGrid.css";
import Recipe from "./Recipe";
import avocadoToast from "../assets/images/avacadoToast.png";
import burger from "../assets/images/burger.png";
import ebiTempura from "../assets/images/ebiTempura.png";
import icecream from "../assets/images/icecream.png";
import kebabs from "../assets/images/kebabs.png";
import muShu from "../assets/images/muShu.png";
import mussels from "../assets/images/mussels.png";
import onigiri from "../assets/images/onigiri.png";
import pancakes from "../assets/images/pancakes.png";
import beefShank from "../assets/images/beefShank.png";
import shrimpCocktail from "../assets/images/shrimpCocktail.png";
import springRolls from "../assets/images/springRolls.png";
import steak from "../assets/images/steak.png";
import tofu from "../assets/images/tofu.png";
import udon from "../assets/images/udon.png";
function RecipeList() {
  const recipes = [
    {
      image: avocadoToast,
      name: "Avocado Toast",
      type: "bake",
      description:
        "1. Slice avocado \n2. Slice bread \n3. Put avocado on bread \n4. Preheat oven at 400°F \n5. Put in oven for 5min..? \n6. Good Luck!",
    },
    {
      image: burger,
      name: "Burger",
      type: "bake",
      description:
        "1. Toast bread (see toast recipe)\n2. Slice tomatoes \n3. Grab leaves from ground (seasonal in autumn)\n4. Fry egg (see fry egg recipe) \n5. Bake steak (see steak recipe) \n6. Stack all...whichever way I guess.",
    },
    {
      image: ebiTempura,
      name: "Ebi Tempura",
      type: "meal",
      description:
        "1. Capture shrimp with fiber net\n2. Put bread around shrimp \n3. Heat oil... carefully\n4. Check heat with wooden chopsticks.\n (Ready when they have tiny bubbles around them) \n5. Gently lower shrimp into oil until golden brown. \n No timer, just use feelings.",
    },
    {
      image: icecream,
      name: "Ube Ice Cream",
      type: "sauce",
      description:
        "1. Get ube \n2. Mash ube \n3. Pour milk \n4. Mix until tired I guess. \n5. Freeze for 24 hours...unless you like soup.",
    },
    {
      image: kebabs,
      name: "Kebabs",
      type: "bake",
      description:
        "1. Go to local swarma store.\n2. Ask for kebab, but pronounce it incorrectly. \n3. Pay them in full, and give them ..optional tip on iPad. \n4. Say thanks and leave full and satisfied.",
    },
    {
      image: muShu,
      name: "Mu Shu",
      type: "bake",
      description:
        "1. Make pancakes\n(see pancake recipe, even though wrong kind)\n2. Get a box of salad from Aldi \n3. Shred pork (sauce not included in recipe; \nsauce recipe found separately)\n4. Wrap salad and pork in pancake",
    },
    {
      image: mussels,
      name: "Mussels",
      type: "meal",
      description: "1. Find them at beach.\n2. Eat them.",
    },
    {
      image: onigiri,
      name: "Onigiri",
      type: "bake",
      description:
        "1. Get any rice.\n2. Wash rice with cold water in pot. \nSwirl in pot for 50,000 milliseconds \n3. Put in rice cooker and press cook button \n4. After done, cool rice in room temp \n5. Shape rice into ball and then triangle \n6. Get dry seaweed from H-mart \n7. Wrap rice triangle in seaweed?",
    },
    {
      image: pancakes,
      name: "Pancakes",
      type: "bake",
      description:
        "1. Get waffle mix \n2. Pour onto stainless steel pan \n(It won't stick - trust) \n3. Wait until looks like picture. \n(it won't)",
    },
    {
      image: beefShank,
      name: "Beef Shank",
      type: "meal",
      description:
        "1. Put beef shanks whole in deep pan \n2. Pour a full jar of spaghetti tomato sauce into pan \n3. Bring to boil on high \n4. Bring to low, simmer for 2 hours. \n(They never tell is what number high or low is... \nso yeah)",
    },
    {
      image: shrimpCocktail,
      name: "Shrimp Cocktail",
      type: "sauce",
      description:
        "1. Catch shrimp with bare hands from Alaska \n2. Cook them until looks pink \n3. Throw them back into the Alaskan lakes \n4. Catch them again and eat",
    },
    {
      image: springRolls,
      name: "Spring Rolls",
      type: "bake",
      description: "Seasonal. Only available in Spring.\n",
    },
    {
      image: steak,
      name: "Steak",
      type: "meal",
      description:
        "1. Get steak that is 3 inches thick \n2. Season with salt, pepper, tumeric, garlic and mustard \n3. Bake at 400 deg F for 20 mins.",
    },
    {
      image: tofu,
      name: "Tofu",
      type: "meal",
      description:
        "1. Get tofu from H-mart (too bad if no H-mart) \n2. Steam them for like 5 mins \n3. Add soysauce and sesame oil",
    },
    {
      image: udon,
      name: "Udon",
      type: "meal",
      description:
        "(USA only) \n1. Buy udon from local Japanese (Chinese) ramen shop \n2. Ask for udon even though it is really lo mein \n3. Make sure to buy the overpriced seaweed salad for $8 \n4. Pay in full, plus 20% tip \n5. Say thank you and leave hungry",
    },
  ];
  const [filterSelect, setFilterSelect] = useState("all");
  const [overlayStyle, setOverlayStyle] = useState({ display: "none" });
  const [isOverlay, setIsOverlay] = useState(false);

  const filterByBake = () => {
    setFilterSelect("bake");
  };
  const filterByMeal = () => {
    setFilterSelect("meal");
  };
  const filterBySauce = () => {
    setFilterSelect("sauce");
  };
  const filterByAll = () => {
    setFilterSelect("all");
  };

  const filteredRecipes = recipes.filter((recipe) => {
    if (filterSelect === "all") {
      return true;
    }
    return recipe.type === filterSelect;
  });

  const addOverlayRecipe = () => {
    setOverlayStyle({ display: "block", zIndex: "2", cursor: "pointer" });
    setIsOverlay(true);
  };

  const removerOverlayRecipe = () => {
    setOverlayStyle({ display: "none" });
    setIsOverlay(false);
  };

  return (
    <div className="recipe-list_container">
      <Filter
        filterByAll={filterByAll}
        filterByBake={filterByBake}
        filterByMeal={filterByMeal}
        filterBySauce={filterBySauce}
      />
      <div
        className="recipe-list__overlay"
        style={overlayStyle}
        onClick={removerOverlayRecipe}
      ></div>
      <ul className="recipe-list_grid">
        {filteredRecipes.map((recipe, index) => {
          return (
            <Recipe
              key={index}
              recipeImage={recipe.image}
              recipeName={recipe.name}
              recipeDescription={recipe.description}
              isOverlay={isOverlay}
              addOverlayRecipe={addOverlayRecipe}
              removerOverlayRecipe={removerOverlayRecipe}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeList;
