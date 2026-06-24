"use strict";

const unitvalues = document.querySelector(".unitvalues");
const clickable = document.querySelectorAll(".clickable");
const unitsBtn = document.querySelector(".units");
const imperialBtn = document.querySelector(".imperial");
const temperatureBtns = document.querySelectorAll(".temperature");
const windspeedBtns = document.querySelectorAll(".windspeed");
const precipitationBtns = document.querySelectorAll(".precipitation");
const searchBtn = document.querySelector(".searchbtn");
const selectDate = document.querySelector(".selectDate");
const changedDates = document.querySelectorAll(".changedDate");
const defaultDate = document.querySelector(".defaultDate");
const timeandTemp = document.querySelector(".timeandTemp");
const cityIn = document.querySelector('.input')
const locationtext = document.querySelector('.locationText')
const locationdate = document.querySelector('.locationDate')
const temptext = document.querySelector('.temperaturetext')
const feels_like_text = document.querySelector('.secondfourbox')
const humidity_text = document.querySelector('.moreinfofourboxes div:nth-child(2) p:nth-child(2)')
const wind = document.querySelector('.moreinfofourboxes div:nth-child(3) p:nth-child(2)')
const precipitation = document.querySelector('.moreinfofourboxes div:nth-child(4) p:nth-child(2)')
const sevenBoxContBox1 = document.querySelector('.sevenboxCont div:nth-child(1) p')
const sevenBoxContBox2 = document.querySelector('.sevenboxCont div:nth-child(2) p')
const sevenBoxContBox3 = document.querySelector('.thathir p')
const sevenBoxContBox4 = document.querySelector('.sevenboxCont div:nth-child(4) p')
const sevenBoxContBox5 = document.querySelector('.sevenboxCont div:nth-child(5) p')
const sevenBoxContBox6 = document.querySelector('.sevenboxCont div:nth-child(6) p')
const sevenBoxContBox7 = document.querySelector('.sevenboxCont div:nth-child(7) p')
const headerText = document.querySelector('.headerText')
const searchDiv = document.querySelector('.search')
const netIssueshow = document.querySelector('.networkissues')
const noSearch = document.querySelector(`.nosearch`)
const weatherInfo = document.querySelector('.weatherInfo')
const spinnerRetry = document.querySelector('.retrySpinner')
//  console.log(sevenBoxContBox1, sevenBoxContBox2, sevenBoxContBox3, sevenBoxContBox4, sevenBoxContBox5, sevenBoxContBox6, sevenBoxContBox7);

// console.log(feels_like_text,humidity_text, wind, precipitation);

let fortyFive = 45
let onetyone = 45

const timenTemp = [
  {
    class: "one f45", time: "12 AM",  temp:28
  },
  {
    class: "two f46", time: "1 AM",  temp:28
  },
  {
    class: "three f47", time: "2 AM", temp: 27
  },
  {
    class: "four f48", time: "3 AM", temp: 27
  },
  {
    class: "five f49", time: "4 AM", temp: 26
  },
  {
    class: "six f50", time: "5 AM", temp: 26
  },
  {
    class: "seven f51", time: "6 AM", temp: 25
  },
  {
    class: "eight f52", time: "7 AM", temp: 25
  },
  {
    class: "nine f53", time: "8 AM", temp: 24
  },
  {
    class: "ten f54", time: "9 AM", temp: 24
  },
  {
    class: "eleven f55", time: "10 AM", temp: 23
  },
  {
    class: "twelve f56", time: "11 AM", temp: 23
  },
  {
    class: "thireten f57", time: "12 PM", temp: 22
  },
  {
    class: "fourteen f58", time: "1 PM", temp: 22
  },
  {
    class: "fiveteen f59", time: "2 PM", temp: 21
  },
  {
    class: "sixteen f60", time: "3 PM", temp: 21
  },
  {
    class: "seventeen f61", time: "4 PM", temp: 20
  },
  {
    class: "eighteen f62", time: "5 PM", temp: 20
  },
  {
    class: "nineteen f63", time: "6 PM", temp: 19
  },
  {
    class: "twenty f64", time: "7 PM", temp: 19
  },
  {
    class: "twenty-one f65", time: "8 PM", temp: 18
  },
  {
    class: "twenty-two f66", time: "9 PM", temp: 18
  },
  {
    class: "twenty-three f67", time: "10 PM", temp: 17
  },
  {
    class: "twenty-four f68", time: "11 PM", temp: 17
  },
];

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

function hideMenu() {
  unitvalues.classList.toggle("hidden");
  unitsBtn.classList.toggle("clicked");
}

function imperialClicked() {
  imperialBtn.classList.toggle("impclicked");
}

temperatureBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    temperatureBtns.forEach((button) => {
      button.classList.remove("clicked");
      e.target.classList.add("clicked");
    });
  });
});

windspeedBtns.forEach((element2) => {
  element2.addEventListener("click", (e) => {
    windspeedBtns.forEach((button2) => {
      button2.classList.remove("clicked");
      e.target.classList.add("clicked");
    });
  });
});

precipitationBtns.forEach((element3) => {
  element3.addEventListener("click", (e) => {
    precipitationBtns.forEach((button3) => {
      button3.classList.remove("clicked");
      e.target.classList.add("clicked");
    });
  });
});

function toggleSelectDate() {
  selectDate.classList.toggle("hidden");
}

changedDates.forEach((changedDatesBtn) => {
  changedDatesBtn.addEventListener("click", (e) => {
    defaultDate.innerHTML = `${e.target.textContent} <img src="./images/icon-dropdown.svg" alt="">`;
    changedDates.forEach((button4) => {
      button4.classList.remove("clickedcd");
      e.target.classList.add("clickedcd");
    });
  });
});

timeandTemp.innerHTML = timenTemp.map((eachTIme) =>
  `<div class="timeandTempboxes ${eachTIme.class}">
      <img src="./images/3.webp" alt="">
      <p>${eachTIme.time}</p>
      <p>${eachTIme.temp}°F</p>
   </div>`).join('')

let myApiKey = "95f87d76c1960bdcb3a0808d351a2d56";
let city = cityIn.value;
let today = new Date;
    
function Nointernet() {
    headerText.classList.add(`hidden`)
    searchDiv.classList.add(`hidden`)
    weatherInfo.classList.add(`hidden`)
    noSearch.classList.add(`hidden`)
    netIssueshow.classList.remove('hidden')
  // console.log('hey');
}

function loadContent() {
    spinnerRetry.classList.add(`spin`)
    // console.log(spinnerRetry);
    headerText.classList.remove(`hidden`)
    searchDiv.classList.remove(`hidden`)
    weatherInfo.classList.remove(`hidden`)
    noSearch.classList.add(`hidden`)
    netIssueshow.classList.add(`hidden`)
}
async function FillContent() {
  try {
    headerText.classList.remove(`hidden`)
    searchDiv.classList.remove(`hidden`)
    weatherInfo.classList.remove(`hidden`)
    noSearch.classList.add(`hidden`)
    netIssueshow.classList.add(`hidden`)
    let response = await fetch('https://free.freeipapi.com/api/json')

    let dataloc = await response.json()
    // console.log(dataloc)
    locationtext.textContent = `${dataloc.regionName}, ${dataloc.countryName}`
    let heyuser = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${dataloc.regionName}&appid=${myApiKey}`)
    let datauser = await heyuser.json()
      let latuser = datauser.coord.lat
      let lonuser = datauser.coord.lon
      // console.log(datauser);
      
    let hourlyUnconverteduser = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${latuser}&longitude=${lonuser}&hourly=temperature_2m,&current=temperature_2m,precipitation,weather_code&models=icon_seamless&hourly=weather_code`)
    let hourlyConverteduser = await hourlyUnconverteduser.json()
    // console.log(hourlyConverteduser);
    // console.log('--------  ---------------------------------------------------------------------------------------------------------------------');
    
      
    temptext.textContent = `${hourlyConverteduser.current.temperature_2m}°C`
    feels_like_text.textContent = `${Math.round(datauser.main.temp - 273.15)}°C`
    humidity_text.textContent = `${datauser.main.humidity}%`
    wind.textContent = `${Math.round(datauser.wind.speed)}Km/h`
    precipitation.textContent = `${hourlyConverteduser.current.precipitation}mm`
    let todaywd = await weekdaysChange(today.getDay())
    // console.log(todaywd)
    // console.log('----------------------------------------------------------------------------------------------------------------------------------------------------');

  // user's date

  for (let i = 0,j = today.getDay(); i < 7; i++,j++) {
    if (j > 6) {
      j = 0
    }
    document.querySelector(`.date${i + 1}`).textContent = `${await weekdaysChange(j)}`  
  }

  // 7 days forecast
  let responseuser = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latuser}&longitude=${lonuser}&daily=temperature_2m_min,temperature_2m_max,weather_code`)
  const data7days = await responseuser.json()
  // console.log(data7days);
  // console.log(data7days.daily.temperature_2m_max);
  let sevendaysTempMax = data7days.daily.temperature_2m_max;
  let sevendaysTempMin = data7days.daily.temperature_2m_min;
  let weatherpic = data7days.daily.weather_code;
  // console.log(sevendaysTempMax);
  let k = 1
  sevendaysTempMax.forEach(maxtempeach => {
    document.querySelector(`.maxtemp${k++}`).textContent = `${Math.round(maxtempeach)}°`
  });
  let j = 1
  sevendaysTempMin.forEach(mintempeach => {
    document.querySelector(`.mintemp${j++}`).textContent = `${Math.round(mintempeach)}°`
  })

  // 7 days icon
  let l = 1
  // console.log(weatherpic);
  weatherpic.forEach(wph => {
  document.querySelector(`.maxtemp${l++}`).parentElement.parentElement.children[1].src = `./images/${wph === 0 ? 0 : 
  (wph === 1 || wph === 2) ? 1 : 
   wph === 3 ? 3 : 
  (wph === 45 || wph === 48) ? 45 :
  (wph >= 51 && wph <= 57) ? 51 : 
  ((wph >= 61 && wph <= 67) || (wph >= 80 && wph <= 82)) ? 61 : 
  ((wph >= 71 && wph <= 77) || (wph >= 85 && wph <= 86)) ? 71 : 
  (wph >= 95 && wph <= 99) ? 95 : 0}.webp`
  })
  
  // hourly forecast images
  let day1i = []
  // console.log(hourlyConverteduser.hourly.weather_code);
  for (let mimg = 0; mimg < 24; mimg++) {
    day1i.push(`${hourlyConverteduser.hourly.weather_code[mimg]}`)
  }
  let day2i = []
  for (let nimg = 24; nimg < 48; nimg++) {
    day2i.push(`${hourlyConverteduser.hourly.weather_code[nimg]}`)
  }
  let day3i = []
  for (let oimg = 48; oimg < 72; oimg++) {
    day3i.push(`${hourlyConverteduser.hourly.weather_code[oimg]}`)
  }
  let day4i = []
  for (let pimg = 72; pimg < 96; pimg++) {
    day4i.push(`${hourlyConverteduser.hourly.weather_code[pimg]}`)
  }
  let day5i = []
  for (let simg = 96; simg < 120; simg++) {
    day5i.push(`${hourlyConverteduser.hourly.weather_code[simg]}`)
  }
  let day6i = []
  for (let qimg = 120; qimg < 144; qimg++) {
    day6i.push(`${hourlyConverteduser.hourly.weather_code[qimg]}`)
  }
  let day7i = []
  for (let rimg = 144; rimg < 168; rimg++) {
    day7i.push(`${hourlyConverteduser.hourly.weather_code[rimg]}`)
  }
  let ff = 45
  // console.log(day1i);
  
// {  day1i[imgsnew] === 0 ? 0 : 
//   (day1i[imgsnew] === 1 || day1i[imgsnew] === 2) ? 1 : 
//    day1i[imgsnew] === 3 ? 3 : 
//   (day1i[imgsnew] === 45 || day1i[imgsnew] === 48) ? 45 :
//   (day1i[imgsnew] >= 51 && day1i[imgsnew] <= 57) ? 51 : 
//   ((day1i[imgsnew] >= 61 && day1i[imgsnew] <= 67) || (day1i[imgsnew] >= 80 && day1i[imgsnew] <= 82)) ? 61 : 
//   ((day1i[imgsnew] >= 71 && day1i[imgsnew] <= 77) || (day1i[imgsnew] >= 85 && day1i[imgsnew] <= 86)) ? 71 : 
//   (day1i[imgsnew] >= 95 && day1i[imgsnew] <= 99) ? 95 : 0}
  
  for (let imgs = 0,imgsnew = 0; imgs < 24; imgs++,imgsnew++) {
    document.querySelector(`.f${ff++}`).children[0].src = `./images/${day1i[imgsnew] === 0 ? 0 : 
  (day1i[imgsnew] === 1 || day1i[imgsnew] === 2) ? 1 : 
   day1i[imgsnew] === 3 ? 3 : 
  (day1i[imgsnew] === 45 || day1i[imgsnew] === 48) ? 45 :
  (day1i[imgsnew] >= 51 && day1i[imgsnew] <= 57) ? 51 : 
  ((day1i[imgsnew] >= 61 && day1i[imgsnew] <= 67) || (day1i[imgsnew] >= 80 && day1i[imgsnew] <= 82)) ? 61 : 
  ((day1i[imgsnew] >= 71 && day1i[imgsnew] <= 77) || (day1i[imgsnew] >= 85 && day1i[imgsnew] <= 86)) ? 71 : 
  (day1i[imgsnew] >= 95 && day1i[imgsnew] <= 99) ? 95 : 0}.webp`
    }
  
  // hourly forecast
  let day1 = []
    for (let m = 0; m < 24; m++) {
      day1.push(`${hourlyConverteduser.hourly.temperature_2m[m]}`)
      // console.log(m);   
    }
  
  let day2 = []
  for (let n = 24; n < 48; n++) {
    day2.push(`${hourlyConverteduser.hourly.temperature_2m[n]}`)
  }

  let day3 = []
  for (let o = 48; o < 72; o++) {
    day3.push(`${hourlyConverteduser.hourly.temperature_2m[o]}`)
  }
  
  let day4 = []
  for (let p = 72; p < 96; p++) {
    day4.push(`${hourlyConverteduser.hourly.temperature_2m[p]}`)
  }

  let day5 = []
  for (let q = 96; q < 120; q++) {
    day5.push(`${hourlyConverteduser.hourly.temperature_2m[q]}`)
  }
  
  let day6 = []
  for (let r = 120; r < 144; r++) {
    day6.push(`${hourlyConverteduser.hourly.temperature_2m[r]}`)
  }
  
  let day7 = []
  for (let s = 144; s < 168; s++) {
    day7.push(`${hourlyConverteduser.hourly.temperature_2m[s]}`)
  }
  // console.log('day7', day7);
  const hourlyog2 = document.querySelector('.f45')
    let ffffffffff = 45
    let fgh = 45
    day1.forEach(hourinday1 => {
    // console.log(document.querySelector(`.f${ffffffffff++}`).children[2])
      document.querySelector(`.f${ffffffffff++}`).children[2].textContent = `${hourinday1}°C`
    });
    window.day1fn = function () {
      day1.forEach(hourinday1 => {
        if (fortyFive > 68) {
          fortyFive = 45
        }
        document.querySelector(`.f${fortyFive++}`).children[2].textContent = `${hourinday1}°C`
      })
      
    }
    window.day2fn = function () {
      day2.forEach(hourinday2 => {
        if (fortyFive > 68) {
          fortyFive = 45
        }
        // console.log(document.querySelector(`.f${fortyFive++}`));
        // console.log(fortyFive);
        document.querySelector(`.f${fortyFive++}`).children[2].textContent = `${hourinday2}°C`
        
    })}
  window.day3fn = function () {
    day3.forEach(hourinday3 => {
      if (fortyFive > 68) {
          fortyFive = 45
        }
      document.querySelector(`.f${fortyFive++}`).children[2].textContent = `${hourinday3}°C`
    })}
  window.day4fn = function () {
    day4.forEach(hourinday4 => {
      if (fortyFive > 68) {
          fortyFive = 45
        }
      document.querySelector(`.f${fortyFive++}`).children[2].textContent = `${hourinday4}°C`
    })}
  window.day5fn = function () {
    day5.forEach(hourinday5 => {
      if (fortyFive > 68) {
          fortyFive = 45
        }
      document.querySelector(`.f${fortyFive++}`).children[2].textContent = `${hourinday5}°C`
    })}
    window.day6fn = function () {
      day6.forEach(hourinday6 => {
        if (fortyFive > 68) {
          fortyFive = 45
        }
        document.querySelector(`.f${fortyFive++}`).children[2].textContent = `${hourinday6}°C`
      })
    }
    window.day7fn = function () {
      day7.forEach(hourinday7 => {
        if (fortyFive > 68) {
          fortyFive = 45
        }
        document.querySelector(`.f${fortyFive++}`).children[2].textContent = `${hourinday7}°C`
      })
    }
    // document.querySelector('.dayofWeek1').addEventListener('click', day1fn)
    // document.querySelector('.dayofWeek2').addEventListener('click', day2fn)
    // document.querySelector('.dayofWeek3').addEventListener('click', day3fn)
    // document.querySelector('.dayofWeek4').addEventListener('click', day4fn)
    // document.querySelector('.dayofWeek5').addEventListener('click', day5fn)
    // document.querySelector('.dayofWeek6').addEventListener('click', day6fn)
    // document.querySelector('.dayofWeek7').addEventListener('click', day7fn)
    // await loadContent()
    
  }
  catch (error) {
    setTimeout(() => {
      spinnerRetry.classList.remove(`spin`)
    }, 1400)
    Nointernet()
    console.error(error.message)
  }
  finally {
    
  }
  // console.log(`${hourlyConverteduser.hourly.temperature_2m[168]}`);
}

async function weekdaysChange(todayWeekDay) {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const shortWeekdays = weekdays[`${todayWeekDay}`]
  return shortWeekdays
}

async function weekdaysChangeLong(todayWeekDayLong) {
  const weekdaysL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const LongWeekdays = weekdaysL[`${todayWeekDayLong}`]
  return LongWeekdays
}

  // locationtext.textContent = `${dataloc.city, dataloc.country_name}`
// console.log(today.getDay(), today.toLocaleDateString());
const dayofweek = new Date(today.toLocaleDateString()).toLocaleDateString('en-US', { weekday: 'long' })
// console.log(dayofweek);
defaultDate.innerHTML = `${dayofweek} <img src="./images/icon-dropdown.svg" alt="">`
// const month = new Date().toLocaleString('en-US', { month: 'short' });
// console.log(month);
// console.log(defaultDate.innerHTML);

let monthNumber = today.getMonth()
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const shortMonth = months[monthNumber];
// console.log(shortMonth);

locationdate.textContent = `${dayofweek}, ${shortMonth} ${today.getDate()} ${today.getFullYear()}`
// console.log(locationdate.textContent)
// let zero = 1
let heyoWTF = 0

function weekdaysChangeLongNoAsync(todayWeekDayLongNoAsync) {
  const weekdaysLNA = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const LongWeekdaysNA = weekdaysLNA[`${todayWeekDayLongNoAsync}`]
  return LongWeekdaysNA
}

for (let wkdBtn = 1, wkdac = today.getDay(); wkdBtn < 8; wkdBtn++, wkdac++) {
  if (wkdac > 6) {
    wkdac = 0
  }
  document.querySelector(`.dayofWeek${wkdBtn}`).textContent = weekdaysChangeLongNoAsync(wkdac)
}
FillContent()

async function searchRun() {
  city = cityIn.value;
  // console.log(city);
  try{
    let hey = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}`)
    let data = await hey.json()
    // console.log(data);
    // console.log(`state: ${data.name}`);
    // console.log(`Country: ${data.sys.country}`);
    // console.log(`Temperature: ${data.main.temp}K = ${Math.round(data.main.temp - 273.15)}C`);
    // console.log(`Feels like ${data.main.feels_like}K = ${Math.round(data.main.feels_like - 273.15)}C`);
    // console.log(`Humidity ${data.main.humidity}%`);
    // console.log(`Wind Speed: ${data.wind.speed}mph = ${Math.round(data.wind.speed * 1.60934)}kmhr`);
    // console.log(`Picture: ${data.weather[0].description}`);
    
    // console.log(data);
    let TZ = String((data.timezone) / 3600)
    // console.log(`Timezone: UTC ${!TZ.startsWith('-') ? '+' + TZ : TZ}`);
    let lat = data.coord.lat
    let lon = data.coord.lon
    // console.log(lon, lat);
    
    let responseSearch = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
    
    let datalocsearch = await responseSearch.json()
    
    // console.log(datalocsearch);
    
    
    let hourlyUnconverted = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,&current=temperature_2m,precipitation,weather_code&models=icon_seamless&daily=weather_code,temperature_2m_min,temperature_2m_max&hourly=weather_code`)
    
    let hourlyConverted = await hourlyUnconverted.json()
    
    const maxTempSearch = hourlyConverted.daily.temperature_2m_max;
    const minTempSearch = hourlyConverted.daily.temperature_2m_min;

    let weatherPicSearch = hourlyConverted.daily.weather_code
    // console.log(weatherPicSearch);

    // console.log(`min: ${hourlyConverted.daily.temperature_2m_min}`);
    
    
    
    // console.log(datalocsearch.address.city,datalocsearch.address.country);
    // console.log(`Temp: ${hourlyConverted.current.temperature_2m}`);
    // console.log(`Precipitation ${hourlyConverted.current.precipitation}mm`);
    // console.log(`${hourlyConverted.current.time.slice(0, -6)}`);
    const dayofweekGiven = new Date(hourlyConverted.current.time.slice(0, -6)).toLocaleDateString('en-US', {weekday: 'long'})
    console.log(dayofweekGiven);
    // console.log(hourlyConverted.current.time);
    

    let yearnmonthndate = hourlyConverted.current.time.slice(0, -6)
    let monthnyear = yearnmonthndate.slice(5)
    let monthgiven = monthnyear.slice(0, -3)
    // console.log(monthgiven);
    // let weatherPicSearch =

    // hourly forecast images searched
    
    let day1iSearch = []

    for (let mimgSearch = 0; mimgSearch < 24; mimgSearch++) {       
      day1iSearch.push(`${hourlyConverted.hourly.weather_code[mimgSearch]}`)
    }
    let day2iSearch = []
    for (let nimgSearch = 24; nimgSearch < 48; nimgSearch++) {
      day2iSearch.push(`${hourlyConverted.hourly.weather_code[nimgSearch]}`)
    }
    let day3iSearch = []
    for (let oimgSearch = 48; oimgSearch < 72; oimgSearch++) {
      day3iSearch.push(`${hourlyConverted.hourly.weather_code[oimgSearch]}`)
    }
    let day4iSearch = []
    for (let pimgSearch = 72; pimgSearch < 96; pimgSearch++) {
      day4iSearch.push(`${hourlyConverted.hourly.weather_code[pimgSearch]}`)
    }
    let day5iSearch = []
    for (let qimgSearch = 96; qimgSearch < 120; qimgSearch++) {
      day5iSearch.push(`${hourlyConverted.hourly.weather_code[qimgSearch]}`)
    }
    let day6iSearch = []
    for (let rimgSearch = 120; rimgSearch < 144; rimgSearch++) {
      day6iSearch.push(`${hourlyConverted.hourly.weather_code[rimgSearch]}`)
    }
    let day7iSearch = []
    for (let simgSearch = 144; simgSearch < 168; simgSearch++) {
      day7iSearch.push(`${hourlyConverted.hourly.weather_code[simgSearch]}`)
    }

    let ffSearch = 45;
    for (let imgsSearch = 0; imgsSearch < 24; imgsSearch++) {
      document.querySelector(`.f${ffSearch++}`).children[0].src = `./images/${day1iSearch[imgsSearch] === 0 ? 0 : 
  (day1iSearch[imgsSearch] === 1 || day1iSearch[imgsSearch] === 2) ? 1 : 
   day1iSearch[imgsSearch] === 3 ? 3 : 
  (day1iSearch[imgsSearch] === 45 || day1iSearch[imgsSearch] === 48) ? 45 :
  (day1iSearch[imgsSearch] >= 51 && day1iSearch[imgsSearch] <= 57) ? 51 : 
  ((day1iSearch[imgsSearch] >= 61 && day1iSearch[imgsSearch] <= 67) || (day1iSearch[imgsSearch] >= 80 && day1iSearch[imgsSearch] <= 82)) ? 61 : 
  ((day1iSearch[imgsSearch] >= 71 && day1iSearch[imgsSearch] <= 77) || (day1iSearch[imgsSearch] >= 85 && day1iSearch[imgsSearch] <= 86)) ? 71 : 
  (day1iSearch[imgsSearch] >= 95 && day1iSearch[imgsSearch] <= 99) ? 95 : 0}.webp`}
  
    let day1Search = []
    for (let mSearch = 0; mSearch < 24; mSearch++) {
      day1Search.push(`${hourlyConverted.hourly.temperature_2m[mSearch]}`)
    }

    let day2Search = []
    for (let nSearch = 24; nSearch < 48; nSearch++) {
      day2Search.push(`${hourlyConverted.hourly.temperature_2m[nSearch]}`)
    }

    let day3Search = []
    for (let oSearch = 48; oSearch < 72; oSearch++) {
      day3Search.push(`${hourlyConverted.hourly.temperature_2m[oSearch]}`)
    }

    let day4Search = []
    for (let pSearch = 72; pSearch < 96; pSearch++) {
      day4Search.push(`${hourlyConverted.hourly.temperature_2m[pSearch]}`) 
    }

    let day5Search = []
    for (let qSearch = 96; qSearch < 120; qSearch++) {
      day5Search.push(`${hourlyConverted.hourly.temperature_2m}`)
    }

    let day6Search = []
    for (let rSearch = 120; rSearch < 144; rSearch++) {
      day6Search.push(`${hourlyConverted.hourly.temperature_2m[rSearch]}`) 
    }

    let day7Search = []
    for (let sSearch = 144; sSearch < 168; sSearch++) {
      day7Search.push(`${hourlyConverted.hourly.temperature_2m[sSearch]}`)
    }

    // 7 days text
    let ffffffffffSearch = 45
    day1Search.forEach(hourinday1Search => {
      document.querySelector(`.f${ffffffffffSearch++}`).children[2].textContent = `${hourinday1Search}°C`
    })
    function day2fnSearch() {
        day2Search.forEach()
    }
    // let monthgiven = today.getMonth()
    const monthsgiven = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const shortMonthGiven = monthsgiven[Number(monthgiven - 1)];
    // console.log(shortMonthGiven);
    

    // let timezonedbapikey = X5JP2D24YO5G

    // let timeApi = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${timezonedbapikey}&format=json&by=position&lat=${lat}&lng=${lon}`)
    // let timeApiReal = await timeApi.json()
    // console.log(timeApiReal);
    
    // let tzname = await fetch(`https://timeapi.io/api/v1/timezone/coordinate?latitude=${lat}&longitude=${lon}`)


    // fill the information for the search

    locationtext.textContent = `${((datalocsearch.address.city === undefined) && (datalocsearch.address.city === undefined)) ? datalocsearch.address.state : datalocsearch.address.city === undefined ? datalocsearch.address.town : datalocsearch.address.town === undefined ? datalocsearch.address.city : datalocsearch.address.state}, ${datalocsearch.address.country}`
    // console.log(datalocsearch);
    
    // console.log(datalocsearch.address.town);
    
    temptext.textContent = `${hourlyConverted.current.temperature_2m}°C`
    locationdate.textContent = `${dayofweekGiven}, ${shortMonthGiven} ${hourlyConverted.current.time.slice(0, -6).slice(-2)} ${hourlyConverted.current.time.slice(0, 4)}`
    feels_like_text.textContent = `${Math.round(data.main.temp - 273.15)}°`
    humidity_text.textContent = `${data.main.humidity}%`
    wind.textContent = `${Math.round(data.wind.speed * 1.60934)}Km/h`
    precipitation.textContent = `${hourlyConverted.current.precipitation}mm`
    const dayNumberSearched = new Date(`${hourlyConverted.current.time.slice(0, -6)}`).getDay()
    for (let wdsearch = 0,wdsearchb4 = 1; wdsearch < 7; wdsearch++, wdsearchb4++) {
      document.querySelector(`.date${wdsearchb4}`).textContent = `${await weekdaysChange(wdsearch)}`
    }
    let lSearch = 1
    
    weatherPicSearch.forEach(wps => {
      document.querySelector(`.maxtemp${lSearch++}`).parentElement.parentElement.children[1].src = `./images/${wps === 0 ? 0 :
        (wps === 1 || wps === 2) ? 1 :
          wps === 3 ? 3 :
            (wps === 45 || wps === 48) ? 45 :
              (wps >= 51 && wps <= 57) ? 51 :
                ((wps >= 61 && wps <= 67) || (wps >= 80 && wps <= 82)) ? 61 :
                  ((wps >= 71 && wps <= 77) || (wps >= 85 && wps <= 86)) ? 71 :
                    (wps >= 95 && wps <= 99) ? 95 : 0}.webp`
    })

    let kSearch = 1
    maxTempSearch.forEach(maxTempSearchEach => {
      // console.log(document.querySelector(`.maxtemp${1}`));
      document.querySelector(`.maxtemp${kSearch++}`).textContent = `${Math.round(maxTempSearchEach)}`
    })
      let lSearchminTemp = 1;
    minTempSearch.forEach(minTempSearchEach => {
      document.querySelector(`.mintemp${lSearchminTemp++}`).textContent = `${Math.round(minTempSearchEach)}`
    })
    
  }
  catch(error){
    console.error(error);
  }
  finally {
    
  }
} 