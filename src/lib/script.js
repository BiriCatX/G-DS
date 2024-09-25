export default function setTheme(themeName) {
    const themeLink = document.getElementById('theme-link');
    if (themeLink) {
      themeLink.setAttribute('href', `/src/styles/main/${themeName}.scss`);
      console.log(themeLink.getAttribute('href')); // Log the updated href attribute
    } else {
      console.error('Theme link element not found');
    }
  }

