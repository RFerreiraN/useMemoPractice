import {useEffect, useMemo, useState} from 'react'

export const CalculosPesados = () => {

  const [calculo, setCalculo] = useState([2,6,4,8,9,7,5,9])

  const calcular = (calculo) => useMemo(() =>{
    console.log('Calculando..')
    return calculo.reduce((a,b) => a * b , 1)
  }, [calculo])

  const addNumero = () => {
    setCalculo([
      ...calculo, calculo[calculo.length - 1] + 1 
    ])
    
  }

  const [show, setShow] = useState(true)     


  return (
    <>
      <h1>Hook useMemo</h1>
      <hr />
      <h2>Calculos Pesados:</h2>
      <p>{calcular(calculo)}</p>
      <button className='btn btn-success' onClick={addNumero}>Calcular</button>
      <button className='btn btn-danger' onClick={() => setShow(!show)}>{ show ? ' Show' : 'Hide'}</button>
    </>
  )
}
