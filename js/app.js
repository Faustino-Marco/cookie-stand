'use strict';

let shopSection = document.getElementById('Shops');

console.log(shopSection);

// ***** HELPER FUNCTION - GENERATE A RANDOM NUMBER *****
// got from mdn docs
function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// OBJECT LITERALS

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  AvgCookiesPerSale: 6.3,
  hourlyCustomers: 0,
  photo: '#',
  getCustomers: function () {
    this.hourlyCustomers = `${randomCustomers(${minCust}, ${maxCust})} Customers`
  }
  
}