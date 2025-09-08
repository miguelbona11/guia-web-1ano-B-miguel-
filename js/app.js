// Theme toggle functionality
const initTheme = () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Load saved theme or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
};

// Mobile menu functionality
const initMobileMenu = () => {
    const menuButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    menuButton?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
    });
};

// Keyboard shortcuts
const initKeyboardShortcuts = () => {
    document.addEventListener('keydown', (e) => {
        // Search shortcut: "/"
        if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            const searchInput = document.getElementById('search');
            searchInput?.focus();
        }
        
        // Menu focus: Alt+M
        if (e.key === 'm' && e.altKey) {
            e.preventDefault();
            const menu = document.getElementById('nav-menu');
            const firstMenuItem = menu?.querySelector('a');
            firstMenuItem?.focus();
        }
        
        // Top of page: Home
        if (e.key === 'Home' && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
};

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initKeyboardShortcuts();
});
