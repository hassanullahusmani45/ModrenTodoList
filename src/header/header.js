export default function header() {
    
    const body = document.querySelector('body');
    const themeToggle = document.querySelector('.theme-toggle');
    const getTheme = localStorage.getItem('theme');
    const dateBox = document.querySelector('#date');

    getTheme && body.classList.add(getTheme);
    dateBox.innerHTML = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    function toggleTheme() {
        body.classList.toggle('dark-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark-theme' : '');
        body.classList.contains('dark-theme') ? themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>' : themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
        body.classList.contains('dark-theme') ? themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>' : themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

    themeToggle.addEventListener('click', toggleTheme);

}