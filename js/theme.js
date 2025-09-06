let calAccColor = document.querySelector(`.calendar__accent-color`);
let calThemeSwitch = localStorage.getItem(`calendar__light-mode__enabled`);
let calThemeSwitchBut = document.querySelector(`#calendar__switch-theme`);
let calColor = document.querySelector(`#calendar__color`);

const calHeaderOneSpan = document.querySelector(`h1 span`);
const calThemeSwitchIcon = document.querySelector(`.material-icons`);
const calThemeChangeAccent = document.querySelector(`.material-symbols-outlined`);

const calLightMode = () => {
    document.body.classList.add(`calendar__light-mode`);
    localStorage.setItem(`calendar__light-mode__enabled`, `active`);
    calThemeSwitchIcon.innerHTML = `sunny`;
}

const calDarkMode = () => {
    document.body.classList.remove(`calendar__light-mode`);
    localStorage.setItem(`calendar__light-mode__enabled`, null);
    calThemeSwitchIcon.innerHTML = `bedtime`;
}

if(calThemeSwitch === `active`) calLightMode();

calThemeSwitchIcon.addEventListener(`click`, () => {
    calThemeSwitch = localStorage.getItem(`calendar__light-mode__enabled`);
    calThemeSwitch !== `active` ? calLightMode() : calDarkMode();
});

calThemeChangeAccent.addEventListener(`click`, () => {
    alert(`Choose your desired color by clicking the rectangle next to the paint icon.`);

    calColor.style.display = `block`;
    calColor.style.opacity = 1;

    calColor.addEventListener(`input`, () => {
        calAccColor.style.color = calColor.value;
        calThemeSwitchBut.style.color = calColor.value;
    });
});

calHeaderOneSpan.addEventListener(`click`, () => {
    alert(`Check the console.`);
    console.log(`Check your cookies (should be in the "Application" section of your browser).`);
    document.cookie = `checkthewebsitesnewtitle = Look at the cookie's name, not value.`;
    document.title = `Click on the copyright icon.`;
    const calCopyIcon = document.querySelector(`#calendar__copyright-icon`);
    calCopyIcon.addEventListener(`click`, () => window.location.replace(`https://www.youtube.com/watch?v=SYTW3YvetmU`));
});