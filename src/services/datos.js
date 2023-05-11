const CAT_FACT_RANDOM = 'https://catfact.ninja/fact'

export const obtenerDatos = async () => {
  try {
    const res = await fetch(CAT_FACT_RANDOM)
    const datos = await res.json()
    const { fact } = datos
    return fact
  } catch (error) {
    console.log(error)
  }
  // const tresPalabras = fact.split(' ', 3).join(' ')
}
