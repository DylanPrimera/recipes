import { useParams } from "react-router-dom";
import { FetchRecipe } from "../services/Recipes";
import { useEffect, useState } from "react";
import { Recipe as RecipeType } from "../types";

const Instructions = (recipe: RecipeType) => {
  return (
    <article className="w-[38rem] text-[1.3rem] whitespace-pre-wrap">
      <p
        dangerouslySetInnerHTML={{
          __html: recipe?.instructions as TrustedHTML,
        }}
      ></p>
    </article>
  );
};

const Ingredients = (recipe: RecipeType) => {
  return (
    <div className="w-[38rem]">
      <ul className="list-disc list-inside">
        {recipe?.extendedIngredients.map((item) => (
          <li key={item.id}>{item.original}</li>
        ))}
      </ul>
    </div>
  );
};

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const [activeTab, setActiveTab] = useState("ingredients");

  const getRecipe = async (id: number) => {
    const response = await FetchRecipe(id);
    setRecipe(response);
  };

  useEffect(() => {
    getRecipe(Number(id));
  }, [id]);

  return (
    <div className="detail-wrapper">
      <div>
        <h3 className="font-bold mb-3">{recipe?.title}</h3>
        <img src={recipe?.image} alt={recipe?.title} />
      </div>
      <div className="flex flex-col justify-center gap-8">
        <div className="flex gap-7">
          <button
            className={`btn ${activeTab === "ingredients" ? "active" : ""}`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={`btn ${activeTab === "instructions" ? "active" : ""}`}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
        </div>
        {recipe && activeTab === "ingredients" ? (
          <Ingredients {...recipe!} />
        ) : (
          <Instructions {...recipe!} />
        )}
      </div>
    </div>
  );
};
