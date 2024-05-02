import {
    MediaService
} from '../../../_lib/mediaDevice/media.service'
import {
    ImageStreamService,
    ImageInformationService
} from '../../../_lib/image/image.service'


export class ScreenShotHelper {
    private static instance: ScreenShotHelper

    public static call(): ScreenShotHelper {
        if (!ScreenShotHelper.instance) {
            ScreenShotHelper.instance = new ScreenShotHelper()
        }
        return ScreenShotHelper.instance
    }

    public capture = ''

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
        await MediaService.call().getLocalStream(
            MediaService.call().callStreamModeService().getStreamMode(),
            'getDisplayMedia'
        )

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

    /**
     * 画像情報を取得
     * @param image string
     * @returns Promise<{width: number, height: number}>
     */
    public async getImageInformation(image: string): Promise<{width: number, height: number}> {
        await ImageInformationService.call().set(image)
        return ImageInformationService.call().getSize()
    }

}


