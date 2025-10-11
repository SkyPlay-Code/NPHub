document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('.theme-switch');
    const html = document.documentElement;

    // 1. Get user preference from localStorage or OS setting
    const currentTheme = localStorage.getItem('theme') || getOSTheme();
    html.setAttribute('data-theme', currentTheme);

    // 2. Set listener for the switch button
    themeSwitch.addEventListener('click', () => {
        const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Save preference
    });

    /**
     * Helper function to check the user's Operating System theme preference.
     * @returns {'dark' | 'light'}
     */
    function getOSTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
});