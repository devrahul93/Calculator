import { useState } from 'react'
import './index.css'

function App() {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const ops = ['+', '-', '/', '*', '.']

  const updateCalc = (value) => {
    if (
      // if the last value is operator and the calculation has nothing
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return
    }
    setCalc(calc + value)
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const reset = () => {}

  const backSpace = () => {
    if (calc == '') {
      return
    }

    const value = calc.slice(0, -1)
    setCalc(value)
  }
  return (
    <div class="container">
      <div class="header">
        <div>Calculator</div>
        <div>Theme</div>
      </div>
      <div class="screen">
        {result ? <span>({result})</span> : ''} &nbsp;
        {calc || '0'}
      </div>
      <div class="buttons">
        <button class="but" onClick={() => updateCalc('7')}>
          7
        </button>
        <button class="but" onClick={() => updateCalc('8')}>
          8
        </button>
        <button class="but" onClick={() => updateCalc('9')}>
          9
        </button>
        <button class="but" onClick={backSpace}>
          DEL
        </button>
        <button class="but" onClick={() => updateCalc('4')}>
          4
        </button>
        <button class="but" onClick={() => updateCalc('5')}>
          5
        </button>
        <button class="but" onClick={() => updateCalc('6')}>
          6
        </button>
        <button class="but" onClick={() => updateCalc('+')}>
          +
        </button>
        <button class="but" onClick={() => updateCalc('1')}>
          1
        </button>
        <button class="but" onClick={() => updateCalc('2')}>
          2
        </button>
        <button class="but" onClick={() => updateCalc('3')}>
          3
        </button>
        <button class="but" onClick={() => updateCalc('-')}>
          -
        </button>
        <button class="but" onClick={() => updateCalc('.')}>
          .
        </button>
        <button class="but" onClick={() => updateCalc('0')}>
          0
        </button>
        <button class="but" onClick={() => updateCalc('/')}>
          /
        </button>
        <button class="but" onClick={() => updateCalc('*')}>
          ×
        </button>
        <button class="but but-1" onClick={reset}>
          RESET
        </button>
        <button class="but but-2" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  )
}

export default App
