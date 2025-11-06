let calAccColor = document.querySelectorAll(`.calendar__accent-color`);
let calThemeSwitch = localStorage.getItem(`calendar__light-mode__enabled`);
let calBackgroundSwitch = localStorage.getItem(`calendar__custom-background__enabled`);
let calThemeSwitchBut = document.querySelector(`#calendar__switch-theme`);
let calColor = document.querySelector(`#calendar__color`);

const calHeaderOneSpan = document.querySelector(`h1 span`);
const calThemeSwitchIcon = document.querySelector(`#calendar__mode-change`);
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
    localStorage.setItem(`calendar__custom-background__enabled`, `activated`);
}

const calSolidBackground = () => {
    document.body.classList.remove(`calendar__custom-background`);
    localStorage.setItem(`calendar__custom-background__enabled`, null);
}

if(calBackgroundSwitch === `activated`) calGradientBackground();

calBackgroundSwitchBut.addEventListener(`click`, () => {
    calBackgroundSwitch = localStorage.getItem(`calendar__custom-background__enabled`);
    calBackgroundSwitch !== `activated` ? calGradientBackground() : calSolidBackground();
});

calColor.addEventListener(`input`, () => {
    document.body.style.backgroundImage = `linear-gradient(-60deg, var(--bg-color), ${calColor.value})`;
    calThemeSwitchBut.style.color = calColor.value;
    calColor.style.outline = `16px solid ${calColor.value}`;

    let calColorRed = parseInt(calColor.value.substring(1, 3), 16);
    let calColorGreen = parseInt(calColor.value.substring(3, 5), 16);
    let calColorBlue = parseInt(calColor.value.substring(5, 7), 16);
    let calColorFinal = ((calColorRed * 299) + (calColorGreen * 587) + (calColorBlue * 114)) / 1000;

    for(let i = 0; i <= calAccColor.length; i++) {
        calAccColor[i].style.color = calColor.value;
        if (calColorFinal < 128) {
            document.body.style.color = `white`;
            calAccColor[i].style.color = `white`;
            calBackgroundSwitchBut.style.color = `white`;
            calThemeSwitchBut.style.color = `white`;
            calThemeSwitchIcon.style.color = `white`;
        } else {
            document.body.style.color = `black`;
            calAccColor[i].style.color = `black`;
            calBackgroundSwitchBut.style.color = `black`;
            calThemeSwitchBut.style.color = `black`;
            calThemeSwitchIcon.style.color = `black`;
        }
    }
    
    localStorage.setItem(`calendar__custom-color`, calColor.value);
    localStorage.getItem(`calendar__custom-color`);
});

calHeaderOneSpan.addEventListener(`click`, () => {
    alert(`Check the console.`);
    console.log(`Check your cookies (should be in the "Application" section of your browser).`);
    document.cookie = `checkthewebsitesnewtitle = Look at the cookie's name, not value.`;
    document.title = `Click on the copyright icon.`;
    const calCopyIcon = document.querySelector(`#calendar__copyright-icon`);
    calCopyIcon.addEventListener(`click`, () => window.location.replace(`https://www.youtube.com/watch?v=SYTW3YvetmU`));
});