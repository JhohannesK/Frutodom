const btn = document.querySelector('.btn')
const show = document.querySelector('.show-links')

btn.addEventListener('click', function () {
    show.classList.toggle('hide-links')
})