const toggleBtn = document.querySelector('.hamBtn');
const menujs = document.querySelector('.menu');
const icons = document.querySelector('.icon');

toggleBtn.addEventListener('click', ()=>{
    menujs.classList.toggle('active');
    icons.classList.toggle('active');
});