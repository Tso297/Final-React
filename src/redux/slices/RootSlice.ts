import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        whiskey: 'Whiskey',
        origin: 'Origin',
        proof: 'Proof',
        distillery: 'Distillery'
    },
    reducers: {
        chooseWhiskey: (state, action) => {state.whiskey = action.payload},
        chooseOrigin: (state, action) => {state.origin = action.payload},
        chooseProof: (state, action) => {state.proof = action.payload},
        chooseDistillery: (state, action) => {state.distillery = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseWhiskey, chooseOrigin, chooseProof, chooseDistillery } = rootSlice.actions