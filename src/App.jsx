/* eslint-disable padded-blocks */
import { useEffect } from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import Prueba from './Components/Prueba'

const App = () => {
  const { fact, getRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  useEffect(getRandomFact, [])

  const handleClick = async () => {
    getRandomFact()
  }
  return (
    <div>
      <button onClick={handleClick}>Nuevo hecho</button>
      <h1>App de gatitos</h1>
      {fact ? <p className='mi-clase'>{fact}</p> : <p>Cargando palabras...</p>}
      {imageUrl ? <img src={imageUrl} alt='Imagen de la primera palabra' /> : <p>Cargando imagen..</p>}
      <Prueba />
    </div>
  )
}

export default App
