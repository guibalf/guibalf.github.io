// Apply theme immediately before loader displays
(function () {
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

    const userTheme = getCookie('theme');
    if (userTheme === 'light') {
        document.body.classList.add('light');
    }
})();

// Loading Screen Controller
document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader-wrapper');

    if (!loader) return;

    // Minimum display time for the loader (in milliseconds)
    const minDisplayTime = 2500;
    const startTime = Date.now();

    // Function to hide the loader
    function hideLoader() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

        setTimeout(() => {
            loader.classList.add('fade-out');

            // Remove from DOM after fade-out animation completes
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800); // Match the CSS transition duration
        }, remainingTime);
    }

    // Hide loader when page is fully loaded
    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        window.addEventListener('load', hideLoader);
    }
});
