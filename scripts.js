document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const about = document.getElementById('about');
    const events = document.getElementById('events');
    const contact = document.getElementById('contact');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    fetch('about.html')
        .then(response => response.text())
        .then(data => {
            about.innerHTML = data;
        });

    fetch('events.html')
        .then(response => response.text())
        .then(data => {
            events.innerHTML = data;
        });

    fetch('contact.html')
        .then(response => response.text())
        .then(data => {
            contact.innerHTML = data;
        });
});
