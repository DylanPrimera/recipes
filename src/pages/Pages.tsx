import { Cousine } from "./Cousine";
import { Home } from "./Home";
import { Route, Routes } from "react-router-dom";
import { RecipeSearched } from "./RecipeSearched";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cousine />} />
      <Route path="/search/:search" element={<RecipeSearched/>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
