const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', () => {
    modal.classList.toggle('hide-modal');
})

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('hide-modal');
})
