const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // @learnwithshero

  let printYear = date.getFullYear();
  let printMonth = date.getMonth()+1;
  document.querySelector(".con_tit").innerHTML = `${printYear}. ${printMonth}`;
  console.log(printYear,printMonth)

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="previous-days">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div class="active-day">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-days">${j}</div>`;
    monthDays.innerHTML = days;
  }


  
let activeDay = document.querySelectorAll('.active-day');
let printData1 = document.querySelector('.pop_in_date1');
let printData2 = document.querySelector('.pop_in_date2');

let count = true

activeDay.forEach(function(i){
    i.addEventListener('click',function(){

        count = !count;


      let printDay = i.innerText;
        if(printDay < 10){
          printDay = '0' + printDay
        }
      let printMon = date.getMonth() + 1;
      if(printMon < 10){
        printMon = '0' + printMon
      }
      let printYear = date.getFullYear() - 2000;

      let result = `${printYear}.${printMon}.${printDay}`
      if(count == false){
      printData1.innerText = result;
    }else{
      printData2.innerText = result;
    }
    });
}); //active Click




};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
  // @learnwithshero
renderCalendar();

