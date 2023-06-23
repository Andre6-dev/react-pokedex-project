import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { pokemonsRoute } from "../../utils/constants"

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/initialData",
  async () => {
    try {
      // data is the response from the API
      const { data } = await axios.get(pokemonsRoute)
      console.log(data)
      // We return the results from the API
      return data.results
    } catch (err) {
      console.error(err)
    }
  },
)