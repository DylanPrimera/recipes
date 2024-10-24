export const GetRecipes = async () => {
  const API_URL = `${import.meta.env.VITE_API_URL}?apiKey=${
    import.meta.env.VITE_API_KEY
  }`;
  const response = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.recipes;
};
