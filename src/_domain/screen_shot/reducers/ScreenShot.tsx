import { createSlice } from '@reduxjs/toolkit'

export type ScreenShotPropsInterface = {
    ScreenShot?: ScreenShotInterface
    dispatch?: unknown
}

export type ScreenShotInterface = {
    capture : string
    width   : number
    height  : number
    start   : boolean
}

export const initialState: ScreenShotInterface = {
    capture : '',
    width   : 800,
    height  : 400,
    start   : false,
}
        
/* eslint @typescript-eslint/no-explicit-any: 0 */ 
const slice = createSlice({
    name: 'ScreenShot',
    initialState,
    reducers: {

        setCapture: (state: any, action: any) => {
            state.capture = action.capture
        },
        setSize: (state: any, action: any) => {
            state.width = action.width
            state.height = action.height
        },
        setStart: (state: any, action: any) => {
            state.start = action.start
        },
        reset: () => {
            return initialState
        }
    }
})

export default slice.reducer
