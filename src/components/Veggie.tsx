import { useEffect, useState } from "react"
import { Recipe } from "../types"
import { GetRecipes } from "../services/Recipes"
import { SlideCards } from "./SlideCards"

export const Veggie = () => {
  const [veggie, setVeggie] = useState<Recipe[]>([])

  const getVeggiesRecipes = async() => {
    const veggieStorage = localStorage.getItem('veggie')
    if(veggieStorage !== null) {
      setVeggie(JSON.parse(veggieStorage))
      return
    }
    const response = await GetRecipes('vegetarian')
    localStorage.setItem('veggie', JSON.stringify(response))
    setVeggie(response)
  }

  useEffect(() => {
    getVeggiesRecipes()
  }, [])

  return (
    <div className="my-[4rem] mx-[0rem]">
      <h3 className="font-bold">Veggie Picks</h3>
      <SlideCards data={veggie}/>
    </div>
  )
}
