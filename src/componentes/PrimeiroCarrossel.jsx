import { useEffect, useState } from 'react'
import './../estilos/PrimeiroCarrossel.css'

import img1 from './../assets/PrimeiroCarrossel/primeiraimagemcarrossel.jpg'
import img2 from './../assets/PrimeiroCarrossel/segundaimagemcarrossel.jpeg'
import img3 from './../assets/PrimeiroCarrossel/terceiraimagemcarrossel.jpeg'
import img4 from './../assets/PrimeiroCarrossel/quartaimagemcarrossel.jpeg'
import img5 from './../assets/PrimeiroCarrossel/quintaimagemcarrossel.jpeg'
import img6 from './../assets/PrimeiroCarrossel/sextaimagemcarrossel.jpeg'
import img7 from './../assets/PrimeiroCarrossel/setimaimagemcarrossel.jpeg'
import img8 from './../assets/PrimeiroCarrossel/oitavaimagemcarrossel.jpeg'

const imagens = [img1, img2, img3, img4, img5, img6, img7, img8]

// clones no início e no fim para loop infinito
const imagensLoop = [imagens[imagens.length - 1], ...imagens, imagens[0]]

function PrimeiroCarrossel() {
  const [indexAtual, setIndexAtual] = useState(1)
  const [animando, setAnimando] = useState(true)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(intervalo)
  }, [])

  useEffect(() => {
    if (indexAtual === imagens.length + 1) {
      setTimeout(() => {
        setAnimando(false)
        setIndexAtual(1)
      }, 500)
    }

    if (indexAtual === 0) {
      setTimeout(() => {
        setAnimando(false)
        setIndexAtual(imagens.length)
      }, 500)
    } else {
      setAnimando(true)
    }
  }, [indexAtual])

  const avancar = () => setIndexAtual((prev) => prev + 1)
  const voltar = () => setIndexAtual((prev) => prev - 1)

  return (
    <div className="container-carrossel">
      <button className="btn voltar" onClick={voltar}>
        ‹
      </button>

      <div className="carrossel-viewport">
        <div
          className="carrossel-mudanca"
          style={{
            transform: `translateX(-${indexAtual * (100 / 3)}%)`,
            transition: animando ? 'transform 0.5s ease' : 'none',
          }}
        >
          {imagensLoop.map((img, index) => (
            <img key={index} src={img} className="carrossel-img" alt="" />
          ))}
        </div>
      </div>

      <button className="btn avancar" onClick={avancar}>
        ›
      </button>
    </div>
  )
}

export default PrimeiroCarrossel
