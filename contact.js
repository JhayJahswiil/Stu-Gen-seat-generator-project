// HAMBURGER DOM ELEMENTS
const bars = document.querySelector('.bars')
const times = document.querySelector('.times')
const ul = document.querySelector('.ul')

// HAMBURGER IMPLEMEMTATION
bars.addEventListener('click', function(){
    ul.style.display = 'block'
    bars.style.display = 'none'
    times.style.display = 'initial'
})

times.addEventListener('click', function(){
    ul.style.display = 'none'
    bars.style.display = 'initial'
    times.style.display = 'none'
})

// FORM SUBMISSION
const contactForm = document.querySelector('.contact-form')
const sendBtn = document.querySelector('#send-btn')

contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('hi')
})
