'use strict';

// GLOBAL VARIABLES
let shopSection = document.getElementById('Shops');
let tableHead = document.getElementById('tablehead');
let tableBody = document.getElementById('tablebody');
let tableFoot = document.getElementById('tablefoot');
let myForm = document.getElementById('my-Form');

// ***** HELPER FUNCTION - GENERATE A RANDOM NUMBER *****
// got from mdn docs
function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// sum function
function sum(a, b) {
  return (a + b);
}

// Array for business hours
let businessHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Constructors
let internationalStores = [];

function cookieStore(location, minCust, maxCust, AvgCookiesPerSale) {
  this.location = location; 
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.AvgCookiesPerSale = AvgCookiesPerSale;
  this.hourlySales = 0;
  this.totalSales = 0;
  // this.photo = '#';
  this.salesArr = [];
  this.render();
  internationalStores.push(this);
}

// *** METHOD TO PROTOTYPE ***
cookieStore.prototype.getSales = function () {
  for (let i = 0; i < businessHours.length; i++) {
    let hourlySales = Math.floor(randomCustomers(this.minCust, this.maxCust) * this.AvgCookiesPerSale);
    this.totalSales = sum(this.totalSales, hourlySales);
    this.salesArr.push(hourlySales);
  }
}

// *** RENDER MAIN DATA POINTS (TABLE BODY) ***
cookieStore.prototype.render = function () {
      this.getSales();
      let newRowElem = document.createElement('tr');
      tableBody.appendChild(newRowElem);
      // td city
      let tdCityElem = document.createElement('td');
      tdCityElem.textContent = `${this.location}`;
      newRowElem.appendChild(tdCityElem);
      // td ... sales
      for (let i = 0; i < businessHours.length; i++) {
        let tdElem = document.createElement('td');
        newRowElem.appendChild(tdElem);
        tdElem.textContent = `${this.salesArr[i]}`;
      }
      // td total
      let tdElem = document.createElement('td');
      newRowElem.appendChild(tdElem);
      tdElem.textContent = this.totalSales;
    }
    //********************************************** */
    // INSTANTIATE INTERNATIONAL STORES
    new cookieStore('Seattle', 23, 65, 6.3);
    new cookieStore('Tokyo', 3, 24, 1.2);
    new cookieStore('Dubai', 11, 38, 3.7);
    new cookieStore('Paris', 20, 38, 2.3);
    new cookieStore('Lima', 2, 16, 4.6);

    // *** RENDER TABLE HEADER ***
    let renderTableHeader = function () {
      // row
      let newRowElem = document.createElement('tr');
      tableHead.appendChild(newRowElem);
      // empty top left td
      let emptyth = document.createElement('th');
      newRowElem.appendChild(emptyth);
      // hours elements
      for (let i = 0; i < businessHours.length; i++) {
        let tableHeadElem = document.createElement('th');
        newRowElem.appendChild(tableHeadElem);
        tableHeadElem.textContent = businessHours[i];
        // console.log(businessHours[i]);
      }
      let totalth = document.createElement('th');
      newRowElem.appendChild(totalth);
      totalth.textContent = 'Total';
    
    }
    renderTableHeader();

//***************************************** */
// TABLE FOOTER (TOTALS) DATA

let totalArray = []
let grandTotal = 0
let getHourlyTotals = function () {
  for (let i = 0; i < businessHours.length; i++) {
  let hourlyTotal = 0;
    for (let j = 0; j < internationalStores.length; j++) {
    hourlyTotal += internationalStores[j].salesArr[i];
  }
  totalArray.push(hourlyTotal);
  grandTotal = sum(grandTotal, hourlyTotal)
  // console.log(hourlyTotal);
}
}
getHourlyTotals();
// console.log(totalArray);

// RENDER TABLE FOOTER
console.log(grandTotal);
let renderTableFooter = function () {
  // row
  let newRowElem = document.createElement('tr');
  tableFoot.appendChild(newRowElem);
  // Total bottom left td
  let totalBL = document.createElement('th');
  totalBL.textContent = 'Total';
  newRowElem.appendChild(totalBL);
  // hours elements
  for (let i = 0; i < businessHours.length; i++) {
    let tableHeadElem = document.createElement('td');
    newRowElem.appendChild(tableHeadElem);
    tableHeadElem.textContent = totalArray[i];
  }
  let totalth = document.createElement('th');
  newRowElem.appendChild(totalth);
  totalth.textContent = grandTotal;
}
    renderTableFooter();
// ****************************************
//            click handle
// ****************************************

function handleSubmit(event) {
  event.preventDefault();

  let location = event.target.location.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let AvgCookiesPerSale = +event.target.AvgCookiesPerSale.value;

  let newStore = new cookieStore(location, minCust, maxCust, AvgCookiesPerSale);

  document.getElementById('tablefoot').remove();
  // newStore.render();

  renderTableFooter();
}

// ****************************************
//            click listen
// ****************************************

myForm.addEventListener('submit', handleSubmit);