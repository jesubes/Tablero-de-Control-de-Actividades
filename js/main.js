
import data1 from '../data1.json' assert {type: 'json'};

let bgColors=[
  'hsl(15, 100%, 70%)',
  'hsl(195, 74%, 62%)',
  'hsl(348, 100%, 68%)',
  'hsl(145, 58%, 55%)',
  'hsl(264, 64%, 52%)',
  'hsl(43, 84%, 65%)',
]

let dailyArray = data1.map(item => item.timeframes.daily);
let weeklyArray= data1.map(item=> item.timeframes.weekly);
let monthlyArray=data1.map(item=> item.timeframes.monthly);

console.log(dailyArray);
console.log(weeklyArray);
console.log(monthlyArray);

let dailyBtn = document.querySelector('#daily');
let weklyBtn = document.querySelector('#wekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.secondSection');

console.log(data1);

drawElements(dailyArray);

dailyBtn.addEventListener('click', ()=>{
  drawElements(dailyArray);
});

weklyBtn.addEventListener('click', ()=>{
  drawElements(weeklyArray);
});

monthlyBtn.addEventListener('click', ()=>{
  drawElements(monthlyArray);
});


function drawElements(array){
  secondSection.innerHTML=' '
  array.forEach((element, index)=> {
      // console.log(element);

      let title=data1[index].title;
      let titleLowerCase=title.toLocaleLowerCase();

      if(titleLowerCase=='self care'){
        titleLowerCase='self-care';
      }

      console.log(title);
      console.log(titleLowerCase);

      secondSection.innerHTML += `
      <div class="card">
      <div class="card__background" style="background-color: ${bgColors[index]};">
        <img class="card__image" src="./images/icon-${titleLowerCase}.svg" alt="fondo trabajo ">
      </div>
      <div class="card__details">
        <div class="card__activity">
          <p class="card__title">${title}</p>
          <img class="card__dots" src="./images/icon-ellipsis.svg" alt="tres puntos">
        </div>
        <div class="card__hours">
          <p class="card__hour">${element.current}hrs</p>
          <p class="card__previous">Previous - ${element.previous}hs</p>
        </div>
      </div>
    </div>`
  })
}
