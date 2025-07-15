export default function header() {
    
    let body = document.querySelector('body');
    let themeToggle = document.querySelector('.theme-toggle');
    let getTheme = localStorage.getItem('theme');
    let dateBox = document.querySelector('#date');

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
    }
    themeToggle.addEventListener('click', toggleTheme);

}