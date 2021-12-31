import { useState } from 'react'
import '../index.css'

const CalculatorTwo = () => {
  let initialstate = ''
  const [digit, setDigit] = useState(initialstate)

  const ops = ['+', '-', '/', '*', '.']

  const updateDigit = (value) => {
    //for displaying the number on screen
    //for adding the string to another digit
    if (
      // if the last value is operator and the calculation has nothing do not repeat the ops
      (ops.includes(value) && digit === '') ||
      (ops.includes(value) && ops.includes(digit.slice(-1)))
    ) {
      return
    }
    setDigit(digit + value)
  }

  //claulate or equal to
  const calculate = () => {
    setDigit(eval(digit))
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <div>Calculator</div>
          <div>Theme</div>
        </div>
        <div className="screen">
          <div className="operator-screen"></div>
          <div className="Resultscreen">{digit || '0'}</div>
        </div>
        <div className="buttons">
          <button
            className="but"
            onClick={() => {
              updateDigit('7')
            }}
          >
            7
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('8')
            }}
          >
            8
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('9')
            }}
          >
            9
          </button>
          <button className="but">DEL</button>
          <button
            className="but"
            onClick={() => {
              updateDigit('4')
            }}
          >
            4
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('5')
            }}
          >
            5
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('6')
            }}
          >
            6
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('+')
            }}
          >
            +
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('1')
            }}
          >
            1
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('2')
            }}
          >
            2
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('3')
            }}
          >
            3
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('-')
            }}
          >
            &minus;
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('.')
            }}
          >
            .
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('0')
            }}
          >
            0
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('/')
            }}
          >
            &#8725;
          </button>
          <button
            className="but"
            onClick={() => {
              updateDigit('*')
            }}
          >
            &times;
          </button>
          <button className="but but-1" onClick={() => setDigit(initialstate)}>
            RESET
          </button>
          <button className="but but-2" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  )
}

export default CalculatorTwo
