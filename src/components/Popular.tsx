import { useEffect, useState } from "react";
import { GetRecipes } from "../services/Recipes";
import { Recipe } from "../types";
import { SlideCards } from "./SlideCards";
export const Popular = () => {
  const [popular, setPopular] = useState<Recipe[]>([]);
  const getPopularRecipes = async () => {
    const recipesStorage = localStorage.getItem("popular");
    if(recipesStorage !== null) {
      setPopular(JSON.parse(recipesStorage));
      return;
    }
    const response = await GetRecipes();
    localStorage.setItem("popular", JSON.stringify(response));
    setPopular(response);
  };

  useEffect(() => {
    getPopularRecipes();
  }, []);

  return (
    <div className="my-[4rem] mx-[0rem]">
        <h3 className="font-bold">Popular Picks</h3>
        <SlideCards data={popular}/>
    </div>

  );
};
