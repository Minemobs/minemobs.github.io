var themeToggleBtn = document.getElementById('theme-btn');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleBtn.className = "ti ti-sun-filled";
    document.documentElement.classList.add('dark')
} else {
    themeToggleBtn.className = "ti ti-moon";
    document.documentElement.classList.remove('dark')    
}

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    let usesDarkTheme = false;

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            usesDarkTheme = true;
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            usesDarkTheme = true;
        }
    }
    themeToggleBtn.className = 'ti ' + (usesDarkTheme ? 'ti-sun-filled' : 'ti-moon')
});