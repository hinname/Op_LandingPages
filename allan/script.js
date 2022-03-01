let colorName = document.getElementById('colorName')
let purpleOption = document.getElementById('purple')
let whiteOption = document.getElementById('white')
let blackOption = document.getElementById('black')

const allModels = document.getElementsByClassName('allModels')
const purpleImage = document.getElementsByClassName('purpleModel')
const whiteImage = document.getElementsByClassName('whiteModel')
const blackImage = document.getElementsByClassName('blackModel')

const bigBallW = '1.45rem'
const bigBallH = '1.45rem'
const bigBallBorder = '2.5px'
const normalBallW = '1.25rem'
const normalBallH = '1.25rem'
const normalBallBorder = '1.5px'

let bigContainer = document.getElementById('bigContainer')
let hamburgerMenu = document.querySelector('.hamburgerMenu')
let overlay = document.querySelector('.overlay')

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

  colorName.textContent = 'Purple-ish'

  for (i = 0; i <= allModels.length; i++) {
    allModels[i].style.display = 'none'
    allModels[i].style.opacity = '0'
    purpleImage[i].style.display = 'flex'
    purpleImage[i].style.opacity = '1'
    whiteImage[i].style.display = 'none'
    whiteImage[i].style.opacity = '0'
    blackImage[i].style.display = 'none'
    blackImage[i].style.opacity = '0'
  }
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

  colorName.textContent = 'Clearly White'

  for (i = 0; i <= allModels.length; i++) {
    allModels[i].style.display = 'none'
    allModels[i].style.opacity = '0'
    purpleImage[i].style.display = 'none'
    purpleImage[i].style.opacity = '0'
    whiteImage[i].style.display = 'flex'
    whiteImage[i].style.opacity = '1'
    blackImage[i].style.display = 'none'
    blackImage[i].style.opacity = '0'
    console.log(allModels[i])
  }
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

  colorName.textContent = 'Just Black'

  for (i = 0; i <= allModels.length; i++) {
    allModels[i].style.display = 'none'
    allModels[i].style.opacity = '0'
    purpleImage[i].style.display = 'none'
    purpleImage[i].style.opacity = '0'
    whiteImage[i].style.display = 'none'
    whiteImage[i].style.opacity = '0'
    blackImage[i].style.display = 'flex'
    blackImage[i].style.opacity = '1'
  }
}

function menu() {
  hamburgerMenu.addEventListener('click', () => {
    bigContainer.classList.toggle('menuActive')
    document.body.classList.toggle('stopScrolling')
  })

  overlay.addEventListener('click', () => {
    bigContainer.classList.remove('menuActive')
    document.body.classList.remove('stopScrolling')
  })
}
menu()
