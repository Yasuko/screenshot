import { createSlice } from '@reduxjs/toolkit'

export type ShowScreenPropsInterface = {
    ShowScreen?: ShowScreenInterface
    dispatch?: unknown
}

export type ShowScreenInterface = {
    target      : string
    show        : boolean
}

export const initialState: ShowScreenInterface = {
    target      : '',
    show        : false,
}

/* eslint @typescript-eslint/no-explicit-any: 0 */
const slice = createSlice({
    name: 'ShowScreen',
    initialState,
    reducers: {
        set: (state: any, action: any) => {
            return Object.assign({}, state, {
                target: action.target,
                show: action.show,
            })
        },
        setShow: (state: any, action: any) => {
            return Object.assign({}, state, {
                show: action.show,
            })
        },
        reset: () => {
            return initialState;
        }
    }
});

export default slice.reducer;
