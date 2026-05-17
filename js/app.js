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
}

function sum(a, b) {
  return (a + b);
}

// Array for business hours
let businessHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let internationalStores = [];

class CookieStore {
  constructor(location, minCust, maxCust, avgCookiesPerSale) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.totalSales = 0;
    this.salesArr = [];
    this.render();
    internationalStores.push(this);
  }

  getSales() {
    for (let i = 0; i < businessHours.length; i++) {
      let hourlySales = Math.floor(randomCustomers(this.minCust, this.maxCust) * this.avgCookiesPerSale);
      this.totalSales = sum(this.totalSales, hourlySales);
      this.salesArr.push(hourlySales);
    }
  }

  render() {
    this.getSales();
    let newRowElem = document.createElement('tr');
    tableBody.appendChild(newRowElem);
    // td city
    let tdCityElem = document.createElement('td');
    tdCityElem.textContent = this.location;
    newRowElem.appendChild(tdCityElem);
    // td hourly sales
    for (let i = 0; i < businessHours.length; i++) {
      let tdElem = document.createElement('td');
      tdElem.textContent = this.salesArr[i];
      newRowElem.appendChild(tdElem);
    }
    // td total
    let tdTotal = document.createElement('td');
    tdTotal.textContent = this.totalSales;
    newRowElem.appendChild(tdTotal);
  }
}

// INSTANTIATE INTERNATIONAL STORES
new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);

// *** RENDER TABLE HEADER ***
let renderTableHeader = function () {
  let newRowElem = document.createElement('tr');
  tableHead.appendChild(newRowElem);
  // empty top left th
  let emptyth = document.createElement('th');
  newRowElem.appendChild(emptyth);
  // hours elements
  for (let i = 0; i < businessHours.length; i++) {
    let tableHeadElem = document.createElement('th');
    tableHeadElem.textContent = businessHours[i];
    newRowElem.appendChild(tableHeadElem);
  }
  let totalth = document.createElement('th');
  totalth.textContent = 'Total';
  newRowElem.appendChild(totalth);
}
renderTableHeader();

// TABLE FOOTER (TOTALS) DATA
let totalArray = [];
let grandTotal = 0;

let getHourlyTotals = function () {
  totalArray = [];
  grandTotal = 0;
  for (let i = 0; i < businessHours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < internationalStores.length; j++) {
      hourlyTotal += internationalStores[j].salesArr[i];
    }
    totalArray.push(hourlyTotal);
    grandTotal = sum(grandTotal, hourlyTotal);
  }
}
getHourlyTotals();

// RENDER TABLE FOOTER
let renderTableFooter = function () {
  tableFoot.innerHTML = '';
  let newRowElem = document.createElement('tr');
  tableFoot.appendChild(newRowElem);
  // Total bottom left th
  let totalBL = document.createElement('th');
  totalBL.textContent = 'Total';
  newRowElem.appendChild(totalBL);
  // hourly totals
  for (let i = 0; i < businessHours.length; i++) {
    let tableHeadElem = document.createElement('td');
    tableHeadElem.textContent = totalArray[i];
    newRowElem.appendChild(tableHeadElem);
  }
  let totalth = document.createElement('th');
  totalth.textContent = grandTotal;
  newRowElem.appendChild(totalth);
}
renderTableFooter();

// FORM SUBMIT HANDLER
function handleSubmit(event) {
  event.preventDefault();

  let location = event.target.location.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let avgCookiesPerSale = +event.target.AvgCookiesPerSale.value;

  new CookieStore(location, minCust, maxCust, avgCookiesPerSale);
  getHourlyTotals();
  renderTableFooter();
}

myForm.addEventListener('submit', handleSubmit);
