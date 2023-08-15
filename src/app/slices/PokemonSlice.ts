import { createSlice } from "@reduxjs/toolkit"
import { getInitialPokemonData } from "../reducers/getInitialPokemonData"
import { getPokemonsData } from "../reducers/getPokemonsData";
import { generatedPokemonType, PokemonInitialStateType } from "../../utils/types";

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
  reducers: {
    addPokemonToCompareQueue: ( state, action ) => {
      // Check if the id of each pokemon in the compare queue is the same as the id of the pokemon that we want to add
      const index = state.compareQueue.findIndex(
        ( pokemon: generatedPokemonType ) => pokemon.id === action.payload.id
      )
      // If the pokemon is already in the compare queue, remove it
      if ( index === -1 ) {
        if (state.compareQueue.length === 2) {
          // Remove the last pokemon from the compare queue
          state.compareQueue.pop()
        }
        state.compareQueue.unshift( action.payload )
      }
    },
    removePokemonFromCompareQueue: ( state, action ) => {
      const index = state.compareQueue.findIndex(
        ( pokemon: generatedPokemonType ) => pokemon.id === action.payload.id
      )
      const queue = [...state.compareQueue]
      queue.splice( index, 1 )
      state.compareQueue = queue
    }
  },
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

export const {addPokemonToCompareQueue, removePokemonFromCompareQueue} = PokemonSlice.actions
