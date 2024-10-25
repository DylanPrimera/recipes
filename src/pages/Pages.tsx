import { Cousine } from "./Cousine";
import { Home } from "./Home";
import { Route, Routes } from "react-router-dom";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cousine />} />
    </Routes>
  );
};
