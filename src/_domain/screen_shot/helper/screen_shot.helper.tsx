import {
    MediaService
} from '../../../_lib/mediaDevice/media.service'
import {
    ImageStreamService
} from '../../../_lib/image/image_stream.service'


export class ScreenShotHelper {
    private static instance: ScreenShotHelper

    public static call(): ScreenShotHelper {
        if (!ScreenShotHelper.instance) {
            ScreenShotHelper.instance = new ScreenShotHelper()
        }
        return ScreenShotHelper.instance
    }

    public capture = '';

    public getScreenShot(): string {
        return this.capture
    }

    /**
     * スクリーンショット撮影
     */
    public async captureScreen(): Promise<string> {
        ImageStreamService.call().setVideoTarget('screenvideo')
        this.capture = await ImageStreamService.call().getImageToStream()
        return this.capture
    }

    /**
     * スタート処理
     */
    public async start(): Promise<void> {
        const result = 
            await MediaService.call().getLocalStream(
                MediaService.call().callStreamModeService().getStreamMode(),
                'getDisplayMedia'
            )
        
        console.log(result)
        
        MediaService.call()
            .setVideoTarget('screenvideo')
            .playVideo()
    }

    /**
     * 終了
     */
    public stop(): void {
        MediaService.call().stopVideo()
    }

}


