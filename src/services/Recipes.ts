let API_URL = `${import.meta.env.VITE_API_URL}/random?apiKey=${
  import.meta.env.VITE_API_KEY
}`;

export const GetRecipes = async (tags?: string) => {
  if (tags) {
    API_URL += `&tags=${tags}`;
  }
  const response = await fetch(API_URL + "&number=9", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.recipes;
};

export const FetchComplexSearch = async (cuisine: string) => {
  let API_URL_COMPLEX = `${
    import.meta.env.VITE_API_URL
  }/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${cuisine}`;
  const response = await fetch(API_URL_COMPLEX + "&number=9", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.results;
};

export const FetchQuerySearch = async (query: string) => {
  let API_URL_QUERY = `${
    import.meta.env.VITE_API_URL
  }/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${query}`;
  const response = await fetch(API_URL_QUERY + "&number=9", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.results;
};
