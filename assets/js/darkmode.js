document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    if (!themeSwitch) return; 

    const isDark = () => localStorage.getItem('darkmode') === 'active';

    const enableDarkMode = () => {
        document.body.classList.add('theme--dark');
        localStorage.setItem('darkmode', 'active');
    };

    const disableDarkMode = () => {
        document.body.classList.remove('theme--dark');
        localStorage.removeItem('darkmode');
    };

    if (isDark()) enableDarkMode();

    themeSwitch.addEventListener('click', () => {
        isDark() ? disableDarkMode() : enableDarkMode();
    });
});

/*

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkMode = () => {
    document.body.classList.add("theme--dark")
    localStorage.setItem("darkmode", "active")
};
const disableDarkMode = () => {
    document.body.classList.remove("theme--dark")
    localStorage.setItem("darkmode", null)
};
themeSwitch.addEventListener("click", () => {
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});

if (darkmode === "active") {
    enableDarkMode();
    themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem("darkmode")
        darkmode !== "active" ? enableDarkMode() : disableDarkMode(); 
    })
} 

*/