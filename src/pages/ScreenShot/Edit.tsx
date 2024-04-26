import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import reducer
import {
    ScreenShotPropsInterface, ScreenShotInterface,
    initialState
} from '../../_domain/screen_shot/reducers/ScreenShot'
// import Component

// import Hook

export const Edit = (): JSX.Element => {
    const dispatch = useDispatch();

    const ss = useSelector((state: ScreenShotPropsInterface): ScreenShotInterface => {
        return state.ScreenShot === undefined ? initialState : state.ScreenShot
    })

    if (ss.edit === false) return <div></div>

    return (
    <div className='absolute w-svw h-svh bg-slate-800'>
        <div className="" >
            <img
                className='
                border-2  border-gray-500 rounded-md
                w-[800px] mx-auto my-5
                '
                src={ ss.capture }
            />
        </div>
        <div className='w-svw'>
            <div className='w-[400px] mx-auto'>
                <button
                    className="py-3 px-4 inline-flex items-center gap-x-2
                            text-sm font-semibold rounded-lg
                            border border-transparent bg-gray-800
                            text-white hover:bg-gray-600
                            disabled:opacity-50 disabled:pointer-events-none
                            m-5"
                    onClick={() => {
                        dispatch({ 
                            type: 'ScreenShotAction/takeCapture',
                        })
                    }} >
                    Recapture
                </button>
                <button
                    className="py-3 px-4 inline-flex items-center gap-x-2
                            text-sm font-semibold rounded-lg
                            border border-transparent bg-gray-800
                            text-white hover:bg-gray-600
                            disabled:opacity-50 disabled:pointer-events-none
                            m-5"
                    onClick={() => {
                        dispatch({ 
                            type: 'ScreenShotAction/takeCapture',
                        })
                    }} >
                    Download
                </button>
                <button
                    className="py-3 px-4 inline-flex items-center gap-x-2
                            text-sm font-semibold rounded-lg
                            border border-transparent bg-gray-800
                            text-white hover:bg-gray-600
                            disabled:opacity-50 disabled:pointer-events-none
                            m-5"
                    onClick={() => {
                        dispatch({ 
                            type: 'ScreenShot/setEdit',
                            edit: false
                        })
                    }} >
                    Close
                </button>
            </div>
        </div>
    </div>
    )
}

export default Edit
