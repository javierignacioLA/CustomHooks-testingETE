/* eslint-disable padded-blocks */
import { useState, useEffect } from 'react'
import './App.css'
const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const CAT_FACT_RANDOM = 'https://catfact.ninja/fact'

  const obtenerDatos = async () => {
    try {
      const res = await fetch(CAT_FACT_RANDOM)
      const datos = await res.json()
      const { fact } = datos
      setFact(fact)
    } catch (error) {
      console.log(error)
    }
    // const tresPalabras = fact.split(' ', 3).join(' ')
  }
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

  useEffect(() => { obtenerDatos() }, [])
  useEffect(() => {
    if (!fact) return
    obtenerImagen()
  }, [fact])

  return (
    <div>
      <h1>App de gatitos</h1>
      {fact ? <p>{fact}</p> : <p>Cargando palabras...</p>}
      {imageUrl ? <img src={imageUrl} alt='Imagen de la primera palabra' /> : <p>Cargando imagen..</p>}
    </div>
  )
}

export default App
