import React, { useState, useEffect } from "react"
import Recipe from "./Recipe"
// import logo from './logo.svg'
import "./App.css"

const App = () => {
  const APP_ID = "your own app id"
  const APP_KEY = "your own app key"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
    setLoading(false)
    // console.log(data.hits)
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const getSearch = (event) => {
    event.preventDefault()
    setLoading(true)
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <label htmlFor="search-bar" className="labelFor-search-bar">
          <input
            name="search-bar"
            className="search-bar"
            type="text"
            value={search}
            onChange={handleSearch}
          />
          {loading ? <div className="loader"></div> : null}
        </label>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="row">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.totalWeight}
            title={recipe.recipe.label}
            cal={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App
