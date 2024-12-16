import { ImageTypes } from '../../../../utils/enums/image-types.enum'

export interface ImagePureDto {
    file?: Express.Multer.File
    type: ImageTypes
}