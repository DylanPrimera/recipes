import { Cousine } from "./Cousine";
import { Home } from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { RecipeSearched } from "./RecipeSearched";
import { Recipe } from "./Recipe";
import { AnimatePresence } from "framer-motion";

export const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cousine />} />
        <Route path="/search/:search" element={<RecipeSearched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </AnimatePresence>
  );
};
