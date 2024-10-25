import { Recipe } from "../types";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

interface Props {
  data: Recipe[];
}
export const SlideCards: React.FC<Props> = ({ data }) => {
  const splideOptions: any = {
    perPage: 3,
    breakpoints: {
      640: {
        perPage: 2,
        gap: "0rem",
      },
      768: {
        perPage: 3,
        gap: "0rem",
      },
    },
    arrows: false,
    pagination: false,
    drag: "free",
    gap: "2rem",
  };
  return (
    <Splide options={splideOptions} className="mt-3">
      {data?.map((recipe: Recipe) => (
        <SplideSlide key={recipe.id}>
          <div className="recipe-card">
            <Link to={`/recipe/${recipe.id}`}>
              <p className="px-3">{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <div className="gradient"></div>
            </Link>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};
