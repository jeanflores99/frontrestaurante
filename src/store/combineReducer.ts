import { combineReducers } from "@reduxjs/toolkit";
import { MesaReducer } from './modules/mesa/MesaSlice'

export const Reducers = combineReducers({
    mesa: MesaReducer
})