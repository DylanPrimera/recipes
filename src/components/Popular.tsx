import { useEffect, useState } from "react";
import { GetRecipes } from "../services/Recipes";
import { Recipe } from "../types";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";

export const Popular = () => {
  const [popular, setPopular] = useState<Recipe[]>([]);

  const splideOptions: any = {
    perPage: 3,
    breakpoints: {
      640: {
        perPage: 2,
        gap:'0rem'
      },
      768: {
        perPage: 3,
        gap:'0rem'
      },
    },
    arrows: false,
    pagination: false,
    drag: "free",
    gap: "2rem",
  };

  const getPopularRecipes = async () => {
    const response = await GetRecipes();
    setPopular(response);
  };

  useEffect(() => {
    getPopularRecipes();
  }, []);

  return (
    <div className="my-[4rem] mx-[0rem]">
      <h3>Popular Picks</h3>
      <Splide options={splideOptions}>
        {popular?.map((recipe: Recipe) => (
          <SplideSlide key={recipe.id}>
            <div className="recipe-card">
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <div className="gradient"></div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
