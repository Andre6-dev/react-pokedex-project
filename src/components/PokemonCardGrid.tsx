import React from "react"
import { userPokemonsType } from "../utils/types"

function PokemonCardGrid({ pokemons }: { pokemons: userPokemonsType[] }) {
  return (
    <div className="pokemon-card-grid-container">
      {pokemons &&
        pokemons.length > 0 &&
        pokemons.map((data: userPokemonsType) => {
          return (
            <div className="pokemon-card" key={data.id}>
              <div className="pokemon-card-list"></div>
              <div className="pokemon-card-compare"></div>
              <h3 className="pokemon-card-title">{data.name}</h3>
              <img
                className="pokemon-card-image"
                src={data.image}
                alt={data.name}
              />
            </div>
          )
        })}
    </div>
  )
}

export default PokemonCardGrid
