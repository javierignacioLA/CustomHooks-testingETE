import { useCatImage } from '../hooks/useCatImage'

const Prueba = () => {
  const { imageUrl } = useCatImage({ fact: 'lopo' })
  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt='lopo' /> : <p>Cargando....</p>}
    </div>
  )
}

export default Prueba
