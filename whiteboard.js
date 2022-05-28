'use strict';

//  EVENT FOR FORM SUBMISSION
// STEP 1: Grab the element to listen to
// let myForm = document.getElementById('my-form');
// // STEP 3: define our handler
// function handleSubmit(event) {
//   event.preventDefault(); // for sumbission to stop default behavior of form

//   let name = event.target.fullName.value;
//   console.log(name);
//   let age = +event.target.age.value;
//   console.log(age);
//   let favTeam = event.target.teams.value;
//   console.log(favTeam);

//   console.log('I am submitted');
// }
// // STEP 2: Attach a listener - 2 arg(event, f(x))
// myForm.addEventListener('submit', handleSubmit);
// ******************************
// cookie inputs 
let myForm = document.getElementById('my-form');
// define handler
function handleSubmit(event) {
  event.preventDefault();

  let cityName = event.target.newCityName.value;
  let newMinCust = event.target.newMinCust.value;
  let newMaxCust = event.target.newMaxCust.value;
  let newCityAvg = event.target.newAvgSale.value;

  let newStore = new cookieStore(cityName, newMinCust, newMaxCust, newCityAvg);

  newStore.getSales();
  newStore.render();

  // remove old footer -- then recreate

  myForm.reset();
}
// attach listender
myForm.addEventListener('submit', handleSubmit);





