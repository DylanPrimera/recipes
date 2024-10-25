

export const GetRecipes = async (tags?: string) => {
  let API_URL = `${import.meta.env.VITE_API_URL}/random?apiKey=${
    import.meta.env.VITE_API_KEY
  }`;
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
  const API_URL_COMPLEX = `${
    import.meta.env.VITE_API_URL
  }/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${cuisine}`;

  try {
    const response = await fetch(API_URL_COMPLEX + "&number=9", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // If the response is not OK, throw an error with the status
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data: data.results };
  } catch (error) {
    // Catch any errors that occur during the fetch or processing
    console.error("Error fetching complex search:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "An unknown error occurred" 
    };
  }
};

export const FetchQuerySearch = async (query: string) => {
  const API_URL_QUERY = `${
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

export const FetchRecipe = async (id: number) => {
  const API_URL_RECIPE = `${
    import.meta.env.VITE_API_URL
  }/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`;
  const response = await fetch(API_URL_RECIPE, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
