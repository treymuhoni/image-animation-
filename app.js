const images = document.querySelectorAll('.images')
const fullImage = document.querySelector('.full-image')
const modal = document.querySelector('.modal')
const caption = document.querySelector('.caption')

images.forEach( image => {
    image.addEventListener('click', () =>{
        modal.classList.add('open')
        fullImage.classList.add('open')

        let src = image.getAttribute('data-text')
        let alt = image.alt
        fullImage.src = src
        caption.textContent = alt
    })
})
modal.addEventListener('click', (e) =>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open')
        fullImage.classList.remove('open')

    }
})
