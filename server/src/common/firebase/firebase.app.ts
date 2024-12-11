import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

import { firebaseConfig } from '../../../utils/data/firebase-config'

export const firebaseApp = initializeApp(firebaseConfig, "REVITUP")

export const appStorage = getStorage(firebaseApp)