const darkMode= document.querySelector('#dark')
const newBody= document.querySelector('body')

function changeBackground (e) {
    e.preventDefault()
    if (newBody.classList.contains('dark')) {
        newBody.classList.remove('dark')
    } else{
        newBody.classList.add('dark')
    }
}
darkMode.addEventListener('click', changeBackground);