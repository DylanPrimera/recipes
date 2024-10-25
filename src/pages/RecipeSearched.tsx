import { useParams } from "react-router-dom";
import { Cuisine } from "../types";
import { useEffect, useState } from "react";
import { CardList } from "../components/CardList";
import { FetchQuerySearch } from "../services/Recipes";

export const RecipeSearched = () => {
  const { search } = useParams();
  const [recipe, setRecipe] = useState<Cuisine[]>([]);
  const getRecipe = async (search: string) => {
    const response = await FetchQuerySearch(search);
    setRecipe(response);
  };

  useEffect(() => {
    getRecipe(search as string);
  }, [search]);

  return (
    <>
      {recipe.length === 0 && <h1>Not found</h1>}
      {recipe.length > 0 && <CardList data={recipe} />}
    </>
  );
};
