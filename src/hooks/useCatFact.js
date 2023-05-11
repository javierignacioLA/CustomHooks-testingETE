import { useState } from 'react'
import { obtenerDatos } from '../services/datos'
export const useCatFact = () => {
  const [fact, setFact] = useState()
  const getRandomFact = async () => {
    const newFact = await obtenerDatos()
    setFact(newFact)
  }
  return { fact, getRandomFact }
}
