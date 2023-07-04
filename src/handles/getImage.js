import { getDownloadURL, getStorage, ref } from "firebase/storage";

async function getImage() {
    const filePath = 'gs://odin-photo-tagging-app-b58cd.appspot.com/HuntImages/map.jpg'

    const iamgeRef = ref(getStorage(), filePath)

    const publicUmageURL = await getDownloadURL(iamgeRef)

    return publicUmageURL
}

export default getImage