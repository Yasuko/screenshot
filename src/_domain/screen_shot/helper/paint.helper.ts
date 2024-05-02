import { PaintService } from '../../../_lib/paint/paint.service'
import { ImageResizeService } from '../../../_lib/image/image_resize.service'
import { ImageInformationService } from '../../../_lib/image/image_information.service'

export const setupPaint = async (
    target  : string = 'painttarget',
    image   : string = ''
): Promise<void> => {
    await ImageInformationService.call().set(image)

    await PaintService.call()
        .setPaintTarget(target)
        .setLineWidth(10)
        .setLineColor('rgba(250,250,250,1.0)')
        .setFillColor('rgba(250,250,250,1.0)')
        .setAdjustSize(800)
        .setBaseImage(image)
        //.setScale(scale)

    PaintService.call().setMouseEvent()
}

export const changeColor = async (
    color: string
): Promise<void> => {
    PaintService.call()
        .setLineColor(color)
        .setFillColor(color)
}

/**
 * 第1引数の画像サイズに、第2引数の画像をリサイズする
 * @param org_image string
 * @param match_image string
 * @returns Promise<string>
 */
export const toMatchImage = async (
    org_image: string,
    match_image: string,
): Promise<string> => {
    await ImageInformationService.call().set(org_image)
    const size = ImageInformationService.call().getSize()
    const r = await ImageResizeService.call()
                        .publishResize(match_image, size.width, size.height)
    return r
}

/**
 * 画像をダウンロード
 * @param image string
 */
export const downloadImage = async (image: string): Promise<void> => {
    await PaintService.call().downloadImage('anpanman', 'png', image)
}