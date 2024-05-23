const darkMode = document.querySelector('#darkMode')
const title = document.querySelector('#title')
const imgSrc = document.querySelector('#imgSrc')
const formContainer = document.querySelector('#formContainer')
const errorModal = document.querySelector('#error')
const containerGames = document.querySelector('#containerGames')
const cardGame = document.querySelector('#cardGame')
const imgCreate = document.createElement('img')
const h2Create = document.createElement('h2')

darkMode.textContent = 'Dia'

darkMode.addEventListener('click', () => {
    const darkPage = document.body.classList.toggle('page-dark')
    if(darkPage) {
        darkMode.classList.remove('dark-mode')
        darkMode.classList.add('light-mode')
        darkMode.textContent = 'Noite'
    } else {
        darkMode.classList.remove('light-mode')
        darkMode.classList.add('dark-mode')
        darkMode.textContent = 'Dia'
    }
})

formContainer.addEventListener('submit', (e) => {
    e.preventDefault()
    const valueTitle = title.value
    const valueImgSrc = imgSrc.value

    cardGame.classList.add('card')

    imgCreate.src = valueImgSrc
    imgCreate.alt = `Capa do jogo ${valueTitle}`

    h2Create.textContent = valueTitle

    cardGame.append(imgCreate, h2Create)
    containerGames.appendChild(cardGame)

    title.value = ''
    imgSrc.value = ''

})