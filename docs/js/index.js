const titleOne = document.querySelector(".spec__title--one");
const titleTwo = document.querySelector(".spec__title--two");
const titleThree = document.querySelector(".spec__title--three");
const titleFour = document.querySelector(".spec__title--four");
const w = innerWidth;

if ( w < 1200 ) {
    titleOne.innerHTML = "SKYPE АУДИТ";
    titleTwo.innerHTML = "30 ВИДЖЕТОВ";
    titleThree.innerHTML = "DASHBOARD";
    titleFour.innerHTML = "МЕСЯЦ AMOCRM";
}else{
    titleOne.innerHTML = "ВИДЖЕТЫ";
    titleTwo.innerHTML = "DASHBOARD";
    titleThree.innerHTML = "SKYPE АУДИТ";
    titleFour.innerHTML = "35 ДНЕЙ AMOCRM";
}
