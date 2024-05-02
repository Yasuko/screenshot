import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'

// import reducer
import {
    ScreenShotPropsInterface, ScreenShotInterface,
    initialState
} from '../../_domain/screen_shot/reducers/ScreenShot'
// import Component
import Edit from './Edit'

// import Hook

export const Home = (): JSX.Element => {
    const dispatch: Dispatch = useDispatch()

    const ss = useSelector((state: ScreenShotPropsInterface): ScreenShotInterface => {
        return state.ScreenShot === undefined ? initialState : state.ScreenShot
    })

    return (
    <div className='grid grid-cols-1 gap-5'>
        <div className="w-svw">
            <video
                id="screenvideo"
                className='
                    border-2  border-gray-500 rounded-md
                    w-[320px] mx-auto my-5'
                >
            </video>
        </div>
        <div className="w-svw" >
            { checkImage(ss.capture, dispatch)}
        </div>
        <div className='w-svw'>
            <div className='w-[320px] mx-auto'>
                <button
                    className="
                            py-3 px-4 inline-flex items-center gap-x-2
                            text-sm font-semibold rounded-lg
                            border border-transparent bg-gray-800
                            text-white hover:bg-gray-600
                            disabled:opacity-50 disabled:pointer-events-none
                            m-2"
                    disabled={(ss.start) ? true : false}
                    onClick={() => {
                        dispatch({ 
                            type: 'ScreenShotAction/startCapture',
                        })
                    }} >
                    Start
                </button>
                <button
                    className="py-3 px-4 inline-flex items-center gap-x-2
                            text-sm font-semibold rounded-lg
                            border border-transparent bg-gray-800
                            text-white hover:bg-gray-600
                            disabled:opacity-50 disabled:pointer-events-none
                            m-2"
                    disabled={(ss.start) ? false : true}
                    onClick={() => {
                        dispatch({ 
                            type: 'ScreenShotAction/takeCapture',
                        })
                    }} >
                    Capture
                </button>
                <button
                    className="py-3 px-4 inline-flex items-center gap-x-2
                            text-sm font-semibold rounded-lg
                            border border-transparent bg-gray-800
                            text-white hover:bg-gray-600
                            disabled:opacity-50 disabled:pointer-events-none
                            m-2"
                    disabled={(ss.start) ? false : true}
                    onClick={() => {
                        dispatch({ 
                            type: 'ScreenShotAction/stopCapture',
                        })
                    }} >
                    Stop
                </button>
            </div>
        </div>
        <Edit />
    </div>
    )
}

const checkImage = (image: string, dispatch: Dispatch): JSX.Element => {
    return (image === '') 
        ? <div></div>
        : <img
            width="320"
            height="240"
            className='border-2  border-gray-500 rounded-md
            w-[320px] mx-auto my-5 cursor-pointer'
            src={ image }
            onClick={() => {
                dispatch({ 
                    type: 'Editor/setEdit',
                    edit: true
                })
            }}
        />
}

export default Home
