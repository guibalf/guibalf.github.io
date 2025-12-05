function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');

    // Check if theme was pre-applied by theme-init.js
    if (document.documentElement.classList.contains('light-theme-pending')) {
        document.body.classList.add('light');
        document.documentElement.classList.remove('light-theme-pending');
    } else {
        // Fallback: check cookie again
        const userTheme = getCookie('theme');
        if (userTheme === 'light') {
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
        }
    }

    // Change le thème et le cookie au clic
    if (btn) {
        btn.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light');
            setCookie('theme', isLight ? 'light' : 'dark', 365);
        });
    }
});

