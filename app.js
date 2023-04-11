const redDiv = document.getElementById('red')
const yellowDiv = document.getElementById('yellow')
const greenDiv = document.getElementById('green')
const squares = document.querySelectorAll('.colorSquare')
const reset = document.getElementById('reset')
reset.addEventListener('click', () => location.reload())


const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}

squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value]++
    square.innerText = timesClicked[square.value]
  }
})
