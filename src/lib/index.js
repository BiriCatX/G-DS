export default function setTheme(themeName){
    document.getElementById('theme-link').setAttribute('href','%sveltekit.assets%/'+  themeName  + '.css')  
}
