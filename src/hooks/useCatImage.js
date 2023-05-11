import { useState, useEffect } from 'react'
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  const obtenerImagen = async () => {
    try {
      const primeraPalabra = fact.split(' ')[0]
      const res2 = await fetch(`https://cataas.com/cat/says/${primeraPalabra}`)
      const { url } = res2
      console.log(url)
      setImageUrl(url)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (!fact) return
    obtenerImagen()
  }, [fact])
  return { imageUrl }
}
