import { put, takeEvery } from 'redux-saga/effects'

// import helper
import { ScreenShotHelper } from './helper/screen_shot.helper'
// import model

// import reducer

// Root Saga登録配列
export const RootScreenShotAction = [
    // 顔撮影開始
    takeEvery('ScreenShotAction/startCapture', startCapture),
    takeEvery('ScreenShotAction/stopCapture', stopCapture),
    takeEvery('ScreenShotAction/takeCapture', takeCapture),
]

function* startCapture(): unknown
{
    yield ScreenShotHelper.call().start()
    yield put({
        type    : 'ScreenShot/setStart',
        start   : true
    })
}

function* stopCapture(): unknown
{
    yield ScreenShotHelper.call().stop()
    yield put({
        type    : 'ScreenShot/setStart',
        start   : false
    })
}

function* takeCapture(): unknown
{
    const capture = yield ScreenShotHelper.call().captureScreen()

    yield put({
        type    : 'ScreenShot/setCapture',
        capture : capture
    })
}