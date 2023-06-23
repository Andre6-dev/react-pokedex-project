import React, { useEffect } from "react"
import Wrapper from "../sections/Wrapper"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData"
import { getPokemonsData } from "../app/reducers/getPokemonsData"
import PokemonCardGrid from "../components/PokemonCardGrid"

function Search() {
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
  return (
    <>
      <div className="search">
        <input
          type="text"
          name=""
          placeholder="Search Pokemon"
          className="pokemon-searchbar"
        />
        <PokemonCardGrid pokemons={randomPokemons!} />
      </div>
    </>
  )
}

export default Wrapper(Search)
