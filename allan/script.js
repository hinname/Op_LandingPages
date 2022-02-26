let ColorName = document.getElementById('ColorName')
let purpleOption = document.getElementById('purple')
let whiteOption = document.getElementById('white')
let blackOption = document.getElementById('black')

const allModels = document.getElementById('allModels')
const purpleImage = document.getElementById('purpleModel')
const whiteImage = document.getElementById('whiteModel')
const blackImage = document.getElementById('blackModel')

const bigBallW = '1.25rem'
const bigBallH = '1.25rem'
const bigBallBorder = '2px'
const normalBallW = '1.1rem'
const normalBallH = '1.1rem'
const normalBallBorder = '1.3px'

function purpleModel() {
  purpleOption.style.width = bigBallW
  purpleOption.style.height = bigBallH
  purpleOption.style.borderWidth = bigBallBorder

  whiteOption.style.width = normalBallW
  whiteOption.style.height = normalBallH
  whiteOption.style.borderWidth = normalBallBorder

  blackOption.style.width = normalBallW
  blackOption.style.height = normalBallH
  blackOption.style.borderWidth = normalBallBorder

  allModels.style.display = 'none'
  purpleImage.style.display = 'flex'
  whiteImage.style.display = 'none'
  blackImage.style.display = 'none'

  colorName.textContent = 'Purple-ish'
}

function whiteModel() {
  purpleOption.style.width = normalBallW
  purpleOption.style.height = normalBallH
  purpleOption.style.borderWidth = normalBallBorder

  whiteOption.style.width = bigBallW
  whiteOption.style.height = bigBallH
  whiteOption.style.borderWidth = bigBallBorder

  blackOption.style.width = normalBallW
  blackOption.style.height = normalBallH
  blackOption.style.borderWidth = normalBallBorder

  allModels.style.display = 'none'
  purpleImage.style.display = 'none'
  whiteImage.style.display = 'flex'
  blackImage.style.display = 'none'

  colorName.textContent = 'Clearly White'
}

function blackModel() {
  purpleOption.style.width = normalBallW
  purpleOption.style.height = normalBallH
  purpleOption.style.borderWidth = normalBallBorder

  whiteOption.style.width = normalBallW
  whiteOption.style.height = normalBallH
  whiteOption.style.borderWidth = normalBallBorder

  blackOption.style.width = bigBallW
  blackOption.style.height = bigBallH
  blackOption.style.borderWidth = bigBallBorder

  allModels.style.display = 'none'
  purpleImage.style.display = 'none'
  whiteImage.style.display = 'none'
  blackImage.style.display = 'flex'

  colorName.textContent = 'Just Black'
  return colorName
}
