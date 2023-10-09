import { useState , useEffect} from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    
    const [isLoanding, setisLoanding] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setisLoanding(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        images,
        isLoanding,
    }

}