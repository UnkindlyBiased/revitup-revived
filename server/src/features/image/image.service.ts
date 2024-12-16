import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { ImageRepository } from './image.repository';
import { appStorage } from '../../common/firebase/firebase.app';
import { ImagePureDto } from './dto/image-pure.dto';

export class ImageService {
    constructor(
        private repo = new ImageRepository()
    ) {}

    async uploadImage(input: ImagePureDto): Promise<string | null> {
        if (!input.file) return null

        const storageRef = ref(appStorage, 
            'images/' + input.type + '/' + input.file.originalname)
        const metadata = {
            contentType: input.file.mimetype
        }
        
        const snapshot = await uploadBytesResumable(storageRef, input.file.buffer, metadata)
        const downloadUrl = await getDownloadURL(snapshot.ref)

        return downloadUrl
    }
    async uploadPhotoAsEntity() {
        
    }
    async deleteImage(imgLink: string) {
        const imgRef = ref(appStorage, imgLink)

        return await deleteObject(imgRef)
    }
}