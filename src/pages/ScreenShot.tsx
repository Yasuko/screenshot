import React from 'react';
import { Provider } from 'react-redux';

// import rootReducer from './reducers'
import { createStore } from '../_store/configureStore'

// import components
import ScIndex from './ScreenShot/index'

const store = createStore()

const ScreenShot = (): JSX.Element => {
    return (
        <Provider store={store}>
            <ScIndex />
        </Provider>
    )
}

export default ScreenShot
