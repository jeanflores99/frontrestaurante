import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EntityMesaDto } from '@dto/mesa/EntityMesa.dto'
import { HYDRATE } from 'next-redux-wrapper'

export interface IMesa {
    mesas: EntityMesaDto[] | [],
    mesa: EntityMesaDto | {}
}
const InitalState: IMesa = {
    mesa: {},
    mesas: []
}
export const StoreMesa = createSlice({
    name: 'Mesa',
    initialState: InitalState,
    reducers: {
        fill: (state: IMesa, { payload }: PayloadAction<EntityMesaDto[]>) => {
            state.mesas = payload
            return state
        },
    },
    // extraReducers(builder) {
    //     builder.addCase()
    // },
    extraReducers: {
        [HYDRATE](state, { payload }: PayloadAction<any>) {
            return { ...state, ...payload.mesa };
        },
    },

})

export const MesaReducer = StoreMesa.reducer

export const MesaActions = StoreMesa.actions