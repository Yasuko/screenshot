import { animationReducers } from '../pages/animation/index.reducer'
import { ScreenShotReducer } from '../_domain/screen_shot/index.reducers'

export const reducer = {
    ...animationReducers,
    ...ScreenShotReducer,
}
