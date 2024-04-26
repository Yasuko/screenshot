import { createSlice } from '@reduxjs/toolkit'

export type ScreenShotPropsInterface = {
    ScreenShot?: ScreenShotInterface
    dispatch?: unknown
}

export type ScreenShotInterface = {
    capture : string
    start   : boolean
    edit    : boolean
}

export const initialState: ScreenShotInterface = {
    capture : '',
    start   : false,
    edit    : false,
}
        
/* eslint @typescript-eslint/no-explicit-any: 0 */ 
const slice = createSlice({
    name: 'ScreenShot',
    initialState,
    reducers: {

        setCapture: (state: any, action: any) => {
            state.capture = action.capture
        },
        setStart: (state: any, action: any) => {
            state.start = action.start
        },
        setEdit: (state: any, action: any) => {
            state.edit = action.edit
        },
        reset: () => {
            return initialState
        }
    }
});

export default slice.reducer
