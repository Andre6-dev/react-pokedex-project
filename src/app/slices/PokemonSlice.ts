import { createSlice } from "@reduxjs/toolkit"
import { getInitialPokemonData } from "../reducers/getInitialPokemonData"
import { getPokemonsData } from "../reducers/getPokemonsData";
import { PokemonInitialStateType } from "../../utils/types";

const initialState: PokemonInitialStateType = {
  allPokemon: undefined,
  randomPokemons: undefined,
  compareQueue: [],
  userPokemons: [],
  currentPokemon: undefined,
}

export const PokemonSlice = createSlice( {
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    // getInitialPokemonData -> will be used to get all pokemon data
    builder.addCase( getInitialPokemonData.fulfilled, ( state, action ) => {
      state.allPokemon = action.payload
    } )
    // getPokemonsData -> will be used to get random pokemon data
    builder.addCase( getPokemonsData.fulfilled, ( state, action ) => {
      state.randomPokemons = action.payload
    } )
  },
} )

export const {} = PokemonSlice.actions
