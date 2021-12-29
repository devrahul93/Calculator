let runningTotal = 0
let buffer = '0'
let previousOperator

const screen = document.querySelector('.screen')
const button = document.querySelector('.buttons')

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value)
  } else {
    handleNumber(value)
  }
  screen.innerText = buffer
}

function handleSymbol(symbol) {
  //   if (symbol === 'RESET') {
  //     buffer = '0'
  //     runningTotal = '0'
  //   }
  switch (symbol) {
    case 'RESET':
      buffer = '0'
      runningTotal = '0'
      break
    case '&plus;':
      handleMath(symbol)
      break
  }
}
function handleNumber(numberString) {
  if (buffer === '0') {
    buffer = numberString
  } else {
    buffer += numberString
  }
}

function init() {
  button.addEventListener('click', function (event) {
    buttonClick(event.target.innerText)
  })
}

init()
