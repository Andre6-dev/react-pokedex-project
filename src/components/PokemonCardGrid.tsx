import React from "react"
import { pokemonTypeInterface, userPokemonsType } from "../utils/types"
import { FaPlus, FaTrash } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { useAppDispatch } from "../app/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { addPokemonToCompareQueue } from "../app/slices/PokemonSlice";
import { setToast } from "../app/slices/AppSlice";

function PokemonCardGrid ( {pokemons}: { pokemons: userPokemonsType[] } ) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="pokemon-card-grid-container">
      <div className="pokemon-card-grid">
        { pokemons &&
          pokemons.length > 0 &&
          pokemons.map( ( data: userPokemonsType ) => {
            return (
              <div className="pokemon-card" key={ data.id }>
                {/*Plus Icon*/ }
                <div className="pokemon-card-list">
                  { location.pathname.includes( "/pokemon" ) ? (
                    <FaPlus className="plus"/>
                  ) : (location.pathname.includes( "/search" ) ? (
                    <FaPlus className="plus"/>
                  ) : (
                    <FaTrash className="trash"/>
                  )) }
                </div>
                {/*Compare Icon*/ }
                <div className="pokemon-card-compare">
                  <IoGitCompare onClick={() => {
                    dispatch( addPokemonToCompareQueue( data ) )
                    dispatch(setToast(`Added ${data.name} to compare queue`))
                  }}/>
                </div>
                {/*Name*/ }
                <h3 className="pokemon-card-title">{ data.name }</h3>
                {/*Image*/ }
                <img
                  className="pokemon-card-image"
                  src={ data.image }
                  alt={ data.name }
                  onClick={() => {
                    navigate( `/pokemon/${data.id}` )
                  }}
                />
                {/*Types Card in the top*/ }
                <div className="pokemon-card-types">
                  { data.types.map(
                    ( type: pokemonTypeInterface, index: number ) => {
                      const keys = Object.keys( type );
                      return (
                        <div className="pokemon-card-types-type" key={ index }>
                          <img
                            src={ type[keys[0]].image }
                            alt="pokemon type"
                            className="pokemon-card-types-type-image"
                            loading="lazy"
                          />
                          <h6 className="pokemon-card-types-type-text">
                            { keys[0] }
                          </h6>
                        </div>
                      );
                    }
                  ) }
                </div>
              </div>
            )
          } ) }
      </div>
    </div>
  )
}

export default PokemonCardGrid
