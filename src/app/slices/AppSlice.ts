
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppTypeInitialState } from "../../utils/types";
import { pokemonTabs } from "../../utils/constants";

const initialState: AppTypeInitialState = {
  isLoading: true,
  userInfo: undefined,
  toasts: [],
  currentPokemonTab: pokemonTabs.description,
}

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Payload contains the data we want to pass to the reducer
    // We set in the payload a true or false value
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setUserStatus: (
      state,
      action: PayloadAction<{ email: string } | undefined>,
    ) => {
      state.userInfo = action.payload
    },
    setToast: (state, action: PayloadAction<string>) => {
      const toasts = [...state.toasts]
      toasts.push(action.payload)
      state.toasts = toasts
    },
    clearToasts: (state) => {
      state.toasts = []
    },
    setPokemonTab: (state, action) => {
      state.currentPokemonTab = action.payload
    },
  },
})

export const {
  setLoading,
  setUserStatus,
  setToast,
  clearToasts,
  setPokemonTab,
} = AppSlice.actions
