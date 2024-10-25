import { useParams } from "react-router-dom";
import { FetchComplexSearch } from "../services/Recipes";
import { useEffect, useState } from "react";
import { Cuisine } from "../types";
import { CardList } from "../components/CardList";

export const Cousine = () => {
  const { type } = useParams();
  const [cuisine, setCuisine] = useState<Cuisine[]>([]);

  const getCuisine = async (type: string) => {
    const response = await FetchComplexSearch(type);
    setCuisine(response);
  };

  useEffect(() => {
    getCuisine(type as string);
  }, [type]);

  return (
    <CardList data={cuisine}/>
  );
};
