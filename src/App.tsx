import { useEffect } from "react";
import { GetRecipes } from "./services/Recipes";

function App() {
  const getData = async () => {
    const response = await GetRecipes();
    console.log(response);
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-400">Hello world!</h1>
    </>
  );
}

export default App;
