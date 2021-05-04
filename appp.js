let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm ', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//global random function 

function randomnumber (min, max) {
    let randomCount = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.floor(randomCount);
}

let cookieTable = document.getElementById('cookies');

let theStoreDetailsArray = [];
// build constructor 
function StoreDetails( location , min , max , avgCookieSale , randCustomerPerHour, salesPerHour , totalPerDay ){
this.location = location;
this.min = min;
this.max = max;
this.avgCookieSale = avgCookieSale;
this.randCustomerPerHour = randCustomerPerHour;
this.salesPerHour = salesPerHour;
this.totalPerDay = totalPerDay;
theStoreDetailsArray.push(this);
console.log(theStoreDetailsArray);
}


//prototype

StoreDetails.prototype.randomCustomers = function () {
    for (i = 0; i < hours.length; i++){
        this.randCustomerPerHour.push(randomnumber(this.min ,this.max))
    }
    


};

StoreDetails.prototype.amountOfCookiesPurchased =function () {

    for (i = 0; i < hours.length; i++) {
        amount = Math.floor(randomnumber(this.min, this.max) * this.avgCookieSale);
        this.salesPerHour.push(amount);
       this.totalPerDay += amount;
    }
    //console.log(this.salesPerHour);

};








//create  function for header row of table with hours 
function headerRow (){
    //row
    let hedRow =document.createElement('tr');
    cookieTable.appendChild(hedRow);
   
    let thElement = document.createElement ('th')
   hedRow.appendChild(thElement);
    thElement.textContent ='locations';
    

    //push hour array to header raw :
    for(i=0 ; i<hours.length ; i++){
        thElement2 = document.createElement('th');
        hedRow.appendChild(thElement2);
        thElement2.textContent=hours[i]
        }

        thElement3=document.createElement('th');
        hedRow.appendChild(thElement3);
        thElement3.textContent= 'Daily Location Total';
       
        

    
};
headerRow();


StoreDetails.prototype.render= function (){
    this.amountOfCookiesPurchased();
    let cookieTable = document.getElementById('cookies');
    
//create tr
for(j=0 ; j<theStoreDetailsArray.length ; j++){
let trElement =document.createElement('tr');
cookieTable.appendChild(trElement);
let tdElement1=document.createElement('td');
trElement.appendChild(tdElement1)
tdElement1.textContent=theStoreDetailsArray[j].location
//td for locations 
//let tdElement1= document.createElement('td');
//trElement.appendChild(tdElement1);
// data
for (var i=0;j<hours.length;i++){
let tdElement2 = document.createElement('td');
trElement.appendChild(tdElement2);
tdElement2.textContent=theStoreDetailsArray[j].salesPerHour[i]
    }
    
//total
let tdElement3 = document.createElement('td');
trElement.appendChild(tdElement3);
tdElement3.textContent=theStoreDetailsArray[j].totalPerDay}
};


let seattle= new StoreDetails ('Seattle',23,65,6.3,[],[],0);
seattle.amountOfCookiesPurchased();
seattle.render();

let tokyo = new StoreDetails ('Tokyo',3,24,1.2,[],[],0);
tokyo.amountOfCookiesPurchased();
tokyo.render();
let dubai = new StoreDetails ('Dubai',11,38,3.7,[],[],0);
dubai.amountOfCookiesPurchased();
dubai.render();
let paris = new StoreDetails ('Paris',20,38,2.3,[],[],0);
paris.amountOfCookiesPurchased();
paris.render();
let lima = new StoreDetails ('Lima',2,16,4.6,[],[],0);
lima.amountOfCookiesPurchased();
lima.render();
