import { useParams } from "react-router-dom";
import { FetchComplexSearch } from "../services/Recipes";
import { useEffect, useState } from "react";
import { Cuisine } from "../types";

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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-[3rem]">
      {cuisine?.map((item) => (
        <div key={item.id}>
          <img className="rounded-[2rem] w-full" src={item.image} alt={item.title} />
          <h4 className="text-center p-[1rem] font-bold">{item.title}</h4>
        </div>
      ))}
    </div>
  );
};
