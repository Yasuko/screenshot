import { put, select, takeEvery } from 'redux-saga/effects'

// import helper
import { ScreenShotHelper } from './helper/screen_shot.helper'
import { setupPaint, changeColor, downloadImage } from './helper/paint.helper'

// import model

// import reducer
import { ScreenShotPropsInterface } from './reducers/ScreenShot'
import { EditorPropsInterface } from './reducers/Editor'

const Edit = (state: EditorPropsInterface) => state.Editor
const ScreenShot = (state: ScreenShotPropsInterface) => state.ScreenShot

// Root Saga登録配列
export const RootScreenShotAction = [
    // 顔撮影開始
    takeEvery('ScreenShotAction/startCapture', startCapture),
    takeEvery('ScreenShotAction/stopCapture', stopCapture),
    takeEvery('ScreenShotAction/takeCapture', takeCapture),
    takeEvery('ScreenShotAction/setupPaintMode', setupPaintMode),
    takeEvery('ScreenShotAction/changePaintColor', changePaintColor),
    takeEvery('ScreenShotAction/downloadCapture', downloadCapture),
]

function* startCapture()
{
    yield ScreenShotHelper.call().start()
    yield put({
        type    : 'ScreenShot/setStart',
        start   : true
    })
}

function* stopCapture()
{
    yield ScreenShotHelper.call().stop()
    yield put({
        type    : 'ScreenShot/setStart',
        start   : false
    })
}

function* takeCapture()
{
    const editor = yield select(Edit)
    const capture = yield ScreenShotHelper.call().captureScreen()
    const size = yield ScreenShotHelper.call().getImageInformation(capture)

    yield put({
        type    : 'ScreenShot/setCapture',
        capture : capture
    })
    yield put({
        type    : 'ScreenShot/setSize',
        width   : size.width,
        height  : size.height
    })

    if (!editor.edit) {
        yield put({
            type: 'Editor/setEdit',
            edit: true
        })
    }
}

function* setupPaintMode()
{
    const ss = yield select(ScreenShot)

    yield setupPaint('paint-target', ss.capture)
}

function* changePaintColor(
    action: {type: string, color: string}
)
{
    yield console.log(action)
    yield changeColor(action.color)
}


function* downloadCapture()
{
    const ss = yield select(ScreenShot)
    yield downloadImage(ss.capture)
}