import React from 'react'
import { useSelector } from 'react-redux'

// import reducer
import {
    ShowScreenPropsInterface, ShowScreenInterface,
    initialState
} from '../../_domain/screen_shot/reducers/ShowScreen'

// import component
import Home from './Home'



export const Screen = (): JSX.Element => {
    const ss = useSelector((state: ShowScreenPropsInterface): ShowScreenInterface => {
        return state.ShowScreen === undefined ? initialState : state.ShowScreen
    })
    return (
        <div>
            { checkScreen(ss) }
        </div>
    )
}

const checkScreen = (ss: ShowScreenInterface): JSX.Element => {
    if (ss.target === '') return <Home />

    return <div></div>
}

export default Screen
