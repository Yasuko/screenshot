import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import reducer
import {
    EditorPropsInterface,
    EditorInterface,
    initialState
} from '../../_domain/screen_shot/reducers/Editor'
import {
    ScreenShotPropsInterface,
    ScreenShotInterface,
    initialState as ssInitialState
} from '../../_domain/screen_shot/reducers/ScreenShot'

// import Component

// import Hook

export const Edit = (): JSX.Element => {
    const dispatch = useDispatch()

    const ed = useSelector((state: EditorPropsInterface): EditorInterface => {
        return state.Editor === undefined ? initialState : state.Editor
    })

    const ss = useSelector((state: ScreenShotPropsInterface): ScreenShotInterface => {
        return state.ScreenShot === undefined ? ssInitialState : state.ScreenShot
    })

    useEffect(() => {
        if (ed.edit === false) return
        dispatch({
            type: 'ScreenShotAction/setupPaintMode',
        })
    })

    if (ed.edit === false) return <div></div>

    return (
    <div className='absolute w-svw h-svh bg-slate-800'>
        <div className="w-[800px] mx-auto my-5" >
            <img
                id='paint-source'
                className='
                block absolute border-2  border-gray-500 rounded-md
                w-[800px]
                '
                src={ss.capture}
            />
            <canvas
                id="paint-target"
                className='block absolute border-2 border-gray-500 rounded-md
                w-[800px]' />

        </div>
        <div className=' absolute bottom-24 w-svw'>
            <div className='w-[400px] mx-auto'>
                <div
                    className='
                        relative float-left w-10 h-10 rounded-full
                        border-gray-300 border-1 bg-[rgba(255,0,0,1.0)]
                        m-2 cursor-pointer'
                    onClick={() => {
                        dispatch({ 
                            type: 'ScreenShotAction/changePaintColor',
                            color: 'rgba(255,0,0,1.0)'
                        })
                    }}>
                </div>
                <div
                    className='
                        relative float-left w-10 h-10 rounded-full
                        border-gray-300 border-1 bg-[rgba(0,255,0,1.0)]
                        m-2 cursor-pointer'
                        onClick={() => {
                            dispatch({ 
                                type: 'ScreenShotAction/changePaintColor',
                                color: 'rgba(0,255,0,1.0)'
                            })
                        }}>
                </div>
                <div
                    className='
                        relative float-left w-10 h-10 rounded-full
                        border-gray-300 border-1 bg-[rgba(0,0,255,1.0)]
                        m-2 cursor-pointer'
                        onClick={() => {
                            dispatch({ 
                                type: 'ScreenShotAction/changePaintColor',
                                color: 'rgba(0,0,255,1.0)'
                            })
                        }}>
                </div>
                <div
                    className='
                        relative float-left w-10 h-10 rounded-full
                        border-gray-300 border-1 bg-[rgba(255,255,0,1.0)]
                        m-2 cursor-pointer'
                        onClick={() => {
                            dispatch({ 
                                type: 'ScreenShotAction/changePaintColor',
                                color: 'rgba(255,255,0,1.0)'
                            })
                        }}>
                </div>
                <div
                    className='
                        relative float-left w-10 h-10 rounded-full
                        border-gray-300 border-1 bg-[rgba(255,0,255,1.0)]
                        m-2 cursor-pointer'
                        onClick={() => {
                            dispatch({ 
                                type: 'ScreenShotAction/changePaintColor',
                                color: 'rgba(255,0,255,1.0)'
                            })
                        }}>
                </div>
                <div
                    className='
                        relative float-left w-10 h-10 rounded-full
                        border-gray-300 border-1 bg-[rgba(0,255,255,1.0)]
                        m-2 cursor-pointer'
                        onClick={() => {
                            dispatch({ 
                                type: 'ScreenShotAction/changePaintColor',
                                color: 'rgba(0,255,255,1.0)'
                            })
                        }}>
                </div>
                <div
                    className='
                        relative float-left w-10 h-10 rounded-full
                        border-gray-300 border-1 bg-[rgba(255,255,255,1.0)]
                        m-2 cursor-pointer'
                        onClick={() => {
                            dispatch({ 
                                type: 'ScreenShotAction/changePaintColor',
                                color: 'rgba(255,255,255,1.0)'
                            })
                        
                        }}>
                </div>
            </div>
        </div>
        <div className='absolute bottom-5 w-svw'>
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
                            type: 'ScreenShotAction/downloadCapture',
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
                            type: 'Editor/setEdit',
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

const getHeight = (w: number, h: number, css: string): string => {
    console.log(w, h)
    const _h = (h * 800) / w
    console.log(_h)
    //return css + ' h-[' + _h + 'px] '
    return css + ' h-[430px] '
}

export default Edit
