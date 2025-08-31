function calShowTime() {
    const calDayMonth = document.querySelector(`#calendar__day-month`);
    const calYear = document.querySelector(`#calendar__year`);
    const calTime = document.querySelector(`#calendar__time`);

    const calDate = new Date();

    let calMonth = calDate.getMonth();
    let calHour = calDate.getHours();
    let calMin = calDate.getMinutes();
    let calSec = calDate.getSeconds();

    switch(calMonth) {
        case 0:
            calMonth = `January`;
            break;
        case 1:
            calMonth = `February`;
            break;
        case 2:
            calMonth = `March`;
            break;
        case 3:
            calMonth = `April`;
            break;
        case 4:
            calMonth = `May`;
            break;
        case 5:
            calMonth = `June`;
            break;
        case 6:
            calMonth = `July`;
            break;
        case 7:
            calMonth = `August`;
            break;
        case 8:
            calMonth = `September`;
            break;
        case 9:
            calMonth = `October`;
            break;
        case 10:
            calMonth = `November`;
            break;
        case 11:
            calMonth = `December`;
            break;
        default:
            calMonth = `XD`;
            break;
    }

    if (calHour > 0 && calHour <= 9) {
        calHour = `0` + calHour;
    }
    if (calMin >= 0 && calMin <= 9) {
        calMin = `0` + calMin;
    }
    if (calSec >= 0 && calSec <= 9) {
        calSec = `0` + calSec;
    }
    calDayMonth.innerHTML = `${calDate.getDate()} ${calMonth}`;
    calYear.innerHTML = calDate.getFullYear();
    calTime.innerHTML = calDate.getTimezoneOffset();
    calTime.innerHTML = `${calHour}:${calMin}:${calSec}`;
}
calShowTime();
setInterval(calShowTime, 1000);
const calDate = new Date();
const calFooterYear = document.querySelector(`#calendar__current-year`);
calFooterYear.innerHTML = calDate.getFullYear();