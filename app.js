
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm ', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Seattle

let seattle = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
   randCustomerPerHour: [],
    salesPerHour :[],
   totalPerDay:0,

    randomCustomers: function ( ) {
        for (i = 0; i < hours.length; i++){
            this.randCustomerPerHour.push(randomnumber(this.min ,this.max))
        }
        


    },


    amountOfCookiesPurchased: function () {

        for (i = 0; i < hours.length; i++) {
            amount = Math.ceil(randomnumber(this.min, this.max) * this.avgCookieSale);
            this.salesPerHour.push(amount);
           this.totalPerDay += amount;
        }
        //console.log(this.salesPerHour);

    },


toHtml : function () {
    let theparent = document.getElementById('location1');
//console.log(theparent);
let h22 = document.createElement('h2');
theparent.appendChild(h22);
h22.textContent = this.location ; 

let unorderedlist = document.createElement('ul');
theparent.appendChild(unorderedlist);
for(i=0 ; i< hours.length ; i++){
    let listitems = document.createElement('li');
    
    listitems.textContent= hours[i]+': '+this.salesPerHour[i]+' cookies';
    unorderedlist.appendChild(listitems);
}
let listitems = document.createElement('li');
listitems.textContent = 'Total: '+ this.totalPerDay +' cookies'
unorderedlist.appendChild(listitems);
}




}

//out of the object 
 function randomnumber (min, max) {
    let randomCount = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.ceil(randomCount);
}


seattle.randomCustomers();

seattle.amountOfCookiesPurchased();
seattle.toHtml();

//console.log(Seattle.randcustomerPerHour);


//Tokyo


let tokyo = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    avgCookieSale: 1.2,
   randCustomerPerHour: [],
    salesPerHour :[],
   totalPerDay:0,

    randomCustomers: function ( ) {
        for (i = 0; i < hours.length; i++){
            this.randCustomerPerHour.push(randomnumber(this.min ,this.max))
        }
        


    },


    amountOfCookiesPurchased: function () {

        for (i = 0; i < hours.length; i++) {
            amount = Math.ceil(randomnumber(this.min, this.max) * this.avgCookieSale);
            this.salesPerHour.push(amount);
           this.totalPerDay += amount;
        }
        //console.log(this.salesPerHour);

    },


toHtml : function () {
    let theparent = document.getElementById('location1');
//console.log(theparent);
let h22 = document.createElement('h2');
theparent.appendChild(h22);
h22.textContent = this.location ; 

let unorderedlist = document.createElement('ul');
theparent.appendChild(unorderedlist);
for(i=0 ; i< hours.length ; i++){
    let listitems = document.createElement('li');
    
    listitems.textContent= hours[i]+': '+this.salesPerHour[i]+' cookies';
    unorderedlist.appendChild(listitems);
}
let listitems = document.createElement('li');
listitems.textContent = 'Total: '+ this.totalPerDay +' cookies'
unorderedlist.appendChild(listitems);
}



}

tokyo.randomCustomers();

tokyo.amountOfCookiesPurchased();
tokyo.toHtml();


//Dubai

let dubai = {
    location: 'Dubai',
    min: 11,
    max: 38,
    avgCookieSale: 3.7,
   randCustomerPerHour: [],
    salesPerHour :[],
   totalPerDay:0,

    randomCustomers: function ( ) {
        for (i = 0; i < hours.length; i++){
            this.randCustomerPerHour.push(randomnumber(this.min ,this.max))
        }
        


    },


    amountOfCookiesPurchased: function () {

        for (i = 0; i < hours.length; i++) {
            amount = Math.ceil(randomnumber(this.min, this.max) * this.avgCookieSale);
            this.salesPerHour.push(amount);
           this.totalPerDay += amount;
        }
        //console.log(this.salesPerHour);

    },


toHtml : function () {
    let theparent = document.getElementById('location1');
//console.log(theparent);
let h22 = document.createElement('h2');
theparent.appendChild(h22);
h22.textContent = this.location ; 

let unorderedlist = document.createElement('ul');
theparent.appendChild(unorderedlist);
for(i=0 ; i< hours.length ; i++){
    let listitems = document.createElement('li');
    
    listitems.textContent= hours[i]+': '+this.salesPerHour[i]+' cookies';
    unorderedlist.appendChild(listitems);
}
let listitems = document.createElement('li');
listitems.textContent = 'Total: '+ this.totalPerDay +' cookies'
unorderedlist.appendChild(listitems);
}



}

dubai.randomCustomers();

dubai.amountOfCookiesPurchased();
dubai.toHtml();


//paris

let paris = {
    location: 'Paris',
    min: 20,
    max: 38,
    avgCookieSale: 2.3,
   randCustomerPerHour: [],
    salesPerHour :[],
   totalPerDay:0,

    randomCustomers: function ( ) {
        for (i = 0; i < hours.length; i++){
            this.randCustomerPerHour.push(randomnumber(this.min ,this.max))
        }
        


    },


    amountOfCookiesPurchased: function () {

        for (i = 0; i < hours.length; i++) {
            amount = Math.ceil(randomnumber(this.min, this.max) * this.avgCookieSale);
            this.salesPerHour.push(amount);
           this.totalPerDay += amount;
        }
        //console.log(this.salesPerHour);

    },


toHtml : function () {
    let theparent = document.getElementById('location1');
//console.log(theparent);
let h22 = document.createElement('h2');
theparent.appendChild(h22);
h22.textContent = this.location ; 

let unorderedlist = document.createElement('ul');
theparent.appendChild(unorderedlist);
for(i=0 ; i< hours.length ; i++){
    let listitems = document.createElement('li');
    
    listitems.textContent= hours[i]+': '+this.salesPerHour[i]+' cookies';
    unorderedlist.appendChild(listitems);
}
let listitems = document.createElement('li');
listitems.textContent = 'Total: '+ this.totalPerDay +' cookies'
unorderedlist.appendChild(listitems);
}



}

paris.randomCustomers();

paris.amountOfCookiesPurchased();
paris.toHtml();

//Lima

let lima = {
    location: 'Lima',
    min: 2,
    max: 16,
    avgCookieSale: 4.6,
   randCustomerPerHour: [],
    salesPerHour :[],
   totalPerDay:0,

    randomCustomers: function ( ) {
        for (i = 0; i < hours.length; i++){
            this.randCustomerPerHour.push(randomnumber(this.min ,this.max))
        }
        


    },


    amountOfCookiesPurchased: function () {

        for (i = 0; i < hours.length; i++) {
            amount = Math.ceil(randomnumber(this.min, this.max) * this.avgCookieSale);
            this.salesPerHour.push(amount);
           this.totalPerDay += amount;
        }
        //console.log(this.salesPerHour);

    },


toHtml : function () {
    let theparent = document.getElementById('location1');
//console.log(theparent);
let h22 = document.createElement('h2');
theparent.appendChild(h22);
h22.textContent = this.location ; 

let unorderedlist = document.createElement('ul');
theparent.appendChild(unorderedlist);
for(i=0 ; i< hours.length ; i++){
    let listitems = document.createElement('li');
    
    listitems.textContent= hours[i]+': '+this.salesPerHour[i]+' cookies';
    unorderedlist.appendChild(listitems);
}
let listitems = document.createElement('li');
listitems.textContent = 'Total: '+ this.totalPerDay +' cookies'
unorderedlist.appendChild(listitems);
}



}

lima.randomCustomers();

lima.amountOfCookiesPurchased();
lima.toHtml();


