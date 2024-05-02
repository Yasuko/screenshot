import { createSlice } from '@reduxjs/toolkit'

export type EditorPropsInterface = {
    Editor?: EditorInterface
    dispatch?: unknown
}

export type EditorInterface = {
    edit    : boolean
    color   : string
}

export const initialState: EditorInterface = {
    edit    : false,
    color   : 'rgba(255, 255, 255, 1.0)',
}
        
/* eslint @typescript-eslint/no-explicit-any: 0 */ 
const slice = createSlice({
    name: 'Editor',
    initialState,
    reducers: {
        setEdit: (state: any, action: any) => {
            state.edit = action.edit
        },
        setColor: (state: any, action: any) => {
            state.color = action.color
        },
        reset: () => {
            return initialState
        }
    }
});

export default slice.reducer
