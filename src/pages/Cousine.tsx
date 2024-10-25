import { useParams } from "react-router-dom";
import { FetchComplexSearch } from "../services/Recipes";
import { useEffect, useState } from "react";
import { Cuisine } from "../types";
import { CardList } from "../components/CardList";
import { motion } from "framer-motion";

export const Cousine = () => {
  const { type } = useParams();
  const [cuisine, setCuisine] = useState<Cuisine[]>([]);

  const getCuisine = async (type: string) => {
    const response = await FetchComplexSearch(type);
    const error = response.error
    console.log(error);
    setCuisine(response.data);

  };

  useEffect(() => {
    getCuisine(type as string);
  }, [type]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardList data={cuisine} />
    </motion.div>
  );
};
