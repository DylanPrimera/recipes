const API_URL = `${import.meta.env.VITE_API_URL}?apiKey=${
  import.meta.env.VITE_API_KEY
}`;
export const GetRecipes = async () => {
  const response = await fetch(API_URL+'&number=9', {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.recipes;
};
