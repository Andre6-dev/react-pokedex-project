import React, { useEffect } from "react"
import Wrapper from "../sections/Wrapper"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData"
import { getPokemonsData } from "../app/reducers/getPokemonsData"
import PokemonCardGrid from "../components/PokemonCardGrid"
import pokemon from "./Pokemon";
import { debounce } from "../utils/Debounce"

function Search() {
  // handleChange is a debounced function that will be called when the user types in the search bar
  // TODO - Implement a button to search for the pokemon
  const handleChange = debounce((value: string) => getPokemon(value), 300)
  const dispatch = useAppDispatch()
  // All pokemon is an array of objects who contain the pokemon data
  const { allPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon,
  )
  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch])

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon]
      // randomPokemonsId is an array of 20 random pokemon ids
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20)
      console.log(randomPokemonsId)
      dispatch(getPokemonsData(randomPokemonsId))
    }
  }, [allPokemon, dispatch])

  const getPokemon = async (value: string) => {
    if (value.length) {
      const pokemons = allPokemon?.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      )
      dispatch(getPokemonsData(pokemons!))
    } else {
      const clonedPokemons = [...(allPokemon) as []]
      // randomPokemonsId is an array of 20 random pokemon ids
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20)
      console.log(randomPokemonsId)
      dispatch(getPokemonsData(randomPokemonsId))
    }
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          name=""
          placeholder="Search Pokemon"
          className="pokemon-searchbar"
          onChange={(e) => handleChange(e.target.value)}
        />
        <PokemonCardGrid pokemons={randomPokemons!} />
      </div>
    </>
  )
}

export default Wrapper(Search)
