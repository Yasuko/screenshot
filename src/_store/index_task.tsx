import { all } from 'redux-saga/effects'

import { RootScreenShotDomain } from '../_domain/screen_shot/index.task'
import { AnimationTask } from '../pages/animation/index.task'

export default function* rootSaga() {
    yield all([
        ...RootScreenShotDomain,
        ...AnimationTask
    ]);
}
