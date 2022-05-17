'use strict';

let shopSection = document.getElementById('Shops');

console.log(shopSection);

// ***** HELPER FUNCTION - GENERATE A RANDOM NUMBER *****
// got from mdn docs
function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// multiply function
function multiply(a, b) {
  return (a * b);
};

// sum function
function sum(a, b) {
  return (a + b);
}

// Array for business hours
let businessHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

// OBJECT LITERALS

let seattle = {
  location: 'Seattle',
  hourlySales: 0,
  minCust: 23,
  maxCust: 65,
  AvgCookiesPerSale: 6.3,
  salesArr: [],
  totalSales: 0,
  // hourlyCustomers: 0,
  photo: '#',
  getSales: function () {
    for (let i = 0; i < businessHours.length; i++) {
    let hourlySales = Math.floor(randomCustomers(this.minCust, this.maxCust) * this.AvgCookiesPerSale);
    this.totalSales = sum(this.totalSales, hourlySales);
    this.salesArr.push(hourlySales);
    // console.log(hourlySales);
    // console.log(randomCustomers(23, 65));
    }
  },
  render: function() {
    // article
    let articleElem = document.createElement('article');
    shopSection.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);
    // p
    let pElem = document.createElement('p');
    pElem.textContent = `${this.location} has an avg CPC of ${this.AvgCookiesPerSale} per hour;`;
    articleElem.appendChild(pElem);
    // ul
    let ulElem = document.createElement('ul');
    pElem.appendChild(ulElem);
    // li
    for (let i = 0; i < businessHours.length; i++) {
      let liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent = `${businessHours[i]}: ${this.salesArr[i]}`;
    }
    let liElem = document.createElement('li')
    ulElem.appendChild(liElem);
    liElem.textContent = `Total Sales: ${this.totalSales}`;
    // total li
    

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.location} is beautiful`;
    articleElem.appendChild(imgElem);
  }
};
let tokyo = {
  location: 'Tokyo',
  hourlySales: 0,
  minCust: 3,
  maxCust: 24,
  AvgCookiesPerSale: 1.2,
  salesArr: [],
  totalSales: 0,
  // hourlyCustomers: 0,
  photo: '#',
  getSales: function () {
    for (let i = 0; i < businessHours.length; i++) {
    let hourlySales = Math.floor(randomCustomers(this.minCust, this.maxCust) * this.AvgCookiesPerSale);
    this.totalSales = sum(this.totalSales, hourlySales);
    this.salesArr.push(hourlySales);
    // console.log(hourlySales);
    // console.log(randomCustomers(23, 65));
    }
  },
  render: function() {
    // article
    let articleElem = document.createElement('article');
    shopSection.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);
    // p
    let pElem = document.createElement('p');
    pElem.textContent = `${this.location} has an avg CPC of ${this.AvgCookiesPerSale} per hour;`;
    articleElem.appendChild(pElem);
    // ul
    let ulElem = document.createElement('ul');
    pElem.appendChild(ulElem);
    // li
    for (let i = 0; i < businessHours.length; i++) {
      let liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent = `${businessHours[i]}: ${this.salesArr[i]}`;
    }
    let liElem = document.createElement('li')
    ulElem.appendChild(liElem);
    liElem.textContent = `Total Sales: ${this.totalSales}`;
    // total li
    

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.location} is beautiful`;
    articleElem.appendChild(imgElem);
  }
};
let dubai = {
  location: 'Dubai',
  hourlySales: 0,
  minCust: 11,
  maxCust: 38,
  AvgCookiesPerSale: 3.7,
  salesArr: [],
  totalSales: 0,
  // hourlyCustomers: 0,
  photo: '#',
  getSales: function () {
    for (let i = 0; i < businessHours.length; i++) {
    let hourlySales = Math.floor(randomCustomers(this.minCust, this.maxCust) * this.AvgCookiesPerSale);
    this.totalSales = sum(this.totalSales, hourlySales);
    this.salesArr.push(hourlySales);
    // console.log(hourlySales);
    // console.log(randomCustomers(23, 65));
    }
  },
  render: function() {
    // article
    let articleElem = document.createElement('article');
    shopSection.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);
    // p
    let pElem = document.createElement('p');
    pElem.textContent = `${this.location} has an avg CPC of ${this.AvgCookiesPerSale} per hour;`;
    articleElem.appendChild(pElem);
    // ul
    let ulElem = document.createElement('ul');
    pElem.appendChild(ulElem);
    // li
    for (let i = 0; i < businessHours.length; i++) {
      let liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent = `${businessHours[i]}: ${this.salesArr[i]}`;
    }
    let liElem = document.createElement('li')
    ulElem.appendChild(liElem);
    liElem.textContent = `Total Sales: ${this.totalSales}`;
    // total li
    

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.location} is beautiful`;
    articleElem.appendChild(imgElem);
  }
};
let paris = {
  location: 'Paris',
  hourlySales: 0,
  minCust: 20,
  maxCust: 38,
  AvgCookiesPerSale: 2.3,
  salesArr: [],
  totalSales: 0,
  // hourlyCustomers: 0,
  photo: '#',
  getSales: function () {
    for (let i = 0; i < businessHours.length; i++) {
    let hourlySales = Math.floor(randomCustomers(this.minCust, this.maxCust) * this.AvgCookiesPerSale);
    this.totalSales = sum(this.totalSales, hourlySales);
    this.salesArr.push(hourlySales);
    // console.log(hourlySales);
    // console.log(randomCustomers(23, 65));
    }
  },
  render: function() {
    // article
    let articleElem = document.createElement('article');
    shopSection.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);
    // p
    let pElem = document.createElement('p');
    pElem.textContent = `${this.location} has an avg CPC of ${this.AvgCookiesPerSale} per hour;`;
    articleElem.appendChild(pElem);
    // ul
    let ulElem = document.createElement('ul');
    pElem.appendChild(ulElem);
    // li
    for (let i = 0; i < businessHours.length; i++) {
      let liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent = `${businessHours[i]}: ${this.salesArr[i]}`;
    }
    let liElem = document.createElement('li')
    ulElem.appendChild(liElem);
    liElem.textContent = `Total Sales: ${this.totalSales}`;
    // total li
    

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.location} is beautiful`;
    articleElem.appendChild(imgElem);
  }
};
let lima = {
  location: 'Lima',
  hourlySales: 0,
  minCust: 2,
  maxCust: 16,
  AvgCookiesPerSale: 4.6,
  salesArr: [],
  totalSales: 0,
  // hourlyCustomers: 0,
  photo: '#',
  getSales: function () {
    for (let i = 0; i < businessHours.length; i++) {
    let hourlySales = Math.floor(randomCustomers(this.minCust, this.maxCust) * this.AvgCookiesPerSale);
    this.totalSales = sum(this.totalSales, hourlySales);
    this.salesArr.push(hourlySales);
    // console.log(hourlySales);
    // console.log(randomCustomers(23, 65));
    }
  },
  render: function() {
    // article
    let articleElem = document.createElement('article');
    shopSection.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);
    // p
    let pElem = document.createElement('p');
    pElem.textContent = `${this.location} has an avg CPC of ${this.AvgCookiesPerSale} per hour;`;
    articleElem.appendChild(pElem);
    // ul
    let ulElem = document.createElement('ul');
    pElem.appendChild(ulElem);
    // li
    for (let i = 0; i < businessHours.length; i++) {
      let liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent = `${businessHours[i]}: ${this.salesArr[i]}`;
    }
    let liElem = document.createElement('li')
    ulElem.appendChild(liElem);
    liElem.textContent = `Total Sales: ${this.totalSales}`;
    // total li
    

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.location} is beautiful`;
    articleElem.appendChild(imgElem);
  }
};

seattle.getSales();
seattle.render();
tokyo.getSales();
tokyo.render();
dubai.getSales();
dubai.render();
paris.getSales();
paris.render();
lima.getSales();
lima.render();

