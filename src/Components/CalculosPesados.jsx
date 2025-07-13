import {useState} from 'react'

export const CalculosPesados = () => {

  const [calculo, setCalculo] = useState([2,6,4,8,9,7,5,9])

  const calcular = () => {
    setCalculo([])
  }

  return (
    <>
      <h1>Hook useMemo</h1>
      <hr />
      <h2>Calculos Pesados:</h2>
      <p>{calculo}</p>
      <button onClick={calcular}>Calcular</button>
    </>
  )
}
