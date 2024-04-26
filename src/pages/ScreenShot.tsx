import React from 'react';
import { Provider } from 'react-redux';

// import rootReducer from './reducers'
import { createStore } from '../_store/configureStore'

// import components
import ScIndex from './ScreenShot/index'

interface FaceInterface {
    page: string
}

const store = createStore()

const ScreenShot = (p: FaceInterface): JSX.Element => {
    console.log(p)
    return (
        <Provider store={store}>
            <ScIndex />
        </Provider>
    )
}

export default ScreenShot
