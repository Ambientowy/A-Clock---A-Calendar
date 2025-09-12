let calAccColor = document.querySelectorAll(`.calendar__accent-color`);
let calThemeSwitch = localStorage.getItem(`calendar__light-mode__enabled`);
let calBackgroundSwitch = localStorage.getItem(`calendar__light-mode__enabled`);
let calThemeSwitchBut = document.querySelector(`#calendar__switch-theme`);
let calColor = document.querySelector(`#calendar__color`);

const calHeaderOneSpan = document.querySelector(`h1 span`);
const calThemeSwitchIcon = document.querySelector(`#calendar__mode-change`);
const calThemeChangeAccent = document.querySelector(`#calendar__accent-color-change`);
const calBackgroundSwitchBut = document.querySelector(`#calendar__background-change`);

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

const calGradientBackground = () => {
    document.body.classList.add(`calendar__custom-background`);
    localStorage.setItem(`calendar__custom-background__enabled`, `active`);
}

const calSolidBackground = () => {
    document.body.classList.remove(`calendar__custom-background`);
    localStorage.setItem(`calendar__custom-background__enabled`, null);
}

if(calBackgroundSwitch === `active`) calGradientBackground();

calBackgroundSwitchBut.addEventListener(`click`, () => {
    calBackgroundSwitch = localStorage.getItem(`calendar__custom-background__enabled`);
    calBackgroundSwitch !== `active` ? calGradientBackground() : calSolidBackground();
});

calThemeChangeAccent.addEventListener(`click`, () => {
    alert(`Choose your desired color by clicking the rectangle next to the paint icon.`);

    calColor.style.display = `block`;
    calColor.style.opacity = 1;

    calColor.addEventListener(`input`, () => {
        document.body.style.backgroundImage = `linear-gradient(-60deg, var(--bg-color), ${calColor.value})`;
        calThemeSwitchBut.style.color = calColor.value;
        for(let i = 0; i <= calAccColor.length; i++) {
            calAccColor[i].style.color = calColor.value;
        }
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