

'use strict';

//global var with hours open
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm ', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//create empty array to push each store info to
let theStoreDetailsArray = [];

//global function to creat random number

function randomnumber (min, max) {
    let randomCount = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.floor(randomCount);
}





// build constructor 
function StoreDetails( location , min , max , avgCookieSale , randCustomerPerHour, salesPerHour , totalPerDay ){
this.location = location;
this.min = min;
this.max = max;
this.avgCookieSale = avgCookieSale;
this.randCustomerPerHour = [];
this.salesPerHour = [];
this.totalPerDay = 0;
this.totalEachHour = 0;

// push this info to empty array
theStoreDetailsArray.push(this)
}

//--------------------------------------------------------------------------------------


//prototype

StoreDetails.prototype.randomCustomers = function () {
    for (let i = 0; i < hours.length; i++){
        this.randCustomerPerHour.push(randomnumber(this.min ,this.max))
    }
    


};

StoreDetails.prototype.amountOfCookiesPurchased =function () {

    for ( let i = 0; i < hours.length; i++) {
         let amount = Math.floor(randomnumber(this.min, this.max) * this.avgCookieSale);
        this.salesPerHour.push(amount);
       this.totalPerDay += amount;
    }
    

};



//table 
let parent = document.getElementById('parent');
let table =document.createElement('table');
parent.appendChild(table);

//create  function for header row of table with hours 

function headerRow (){
    //row
    let hedRow =document.createElement('tr');
    table.appendChild(hedRow);
   
    let thElement = document.createElement ('th')
   hedRow.appendChild(thElement);
    thElement.textContent ='locations';
    

    //push hour array to header raw :
    for(let i=0 ; i<hours.length ; i++){
       let thElement2 = document.createElement('th');
        hedRow.appendChild(thElement2);
        thElement2.textContent = hours[i]
        }

         let thElement3=document.createElement('th');
        hedRow.appendChild(thElement3);
        thElement3.textContent= 'Daily Location Total';
       
        

    
};



//render table data
StoreDetails.prototype.render= function (){
    this.randomCustomers();
    this.amountOfCookiesPurchased();
   
    
//create tr

let trElement =document.createElement('tr');
table.appendChild(trElement)
let tdElement = document.createElement('td');
tdElement.textContent = this.location;
trElement.appendChild(tdElement);



for (let i=0 ; i<hours.length ; i++){
let tdElement2 = document.createElement('td');
tdElement2.textContent=this.salesPerHour[i];
trElement.appendChild(tdElement2);
    }
    
//total
let tdElement3 = document.createElement('td');
tdElement3.textContent=this.totalPerDay
trElement.appendChild(tdElement3);


};

let seattle= new StoreDetails ('Seattle',23,65,6.3,[],[],0);



let tokyo = new StoreDetails ('Tokyo',3,24,1.2,[],[],0);


let dubai = new StoreDetails ('Dubai',11,38,3.7,[],[],0);


let paris = new StoreDetails ('Paris',20,38,2.3,[],[],0);


let lima = new StoreDetails ('Lima',2,16,4.6,[],[],0);




//create  function for footer row of table

function footerRow (){
    //row
    let footerRow =document.createElement('tr');
   table.appendChild(footerRow);
   
    let tdElement = document.createElement ('td')
   footerRow.appendChild(tdElement);
tdElement.textContent ='Totals';
let totalEachDay =0;
   
    //footer data :
    for(let i=0 ; i<hours.length ; i++){
      let totalEachHour=0;
    
        for(let j=0; j<theStoreDetailsArray.length; j++){
            totalEachHour+=theStoreDetailsArray[j].salesPerHour[i] 
            
        }

       let tdElement2 = document.createElement('td');
       footerRow.appendChild(tdElement2);
        tdElement2.textContent=totalEachHour
     totalEachDay+=totalEachHour
        
        }

       let tdElement3 = document.createElement('td');
        footerRow.appendChild(tdElement3);
         tdElement3.textContent=totalEachDay

    
};



headerRow();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

footerRow();





//---------------form and event----------------------------
//Stand Alone Function -- add a new store and recrete the table
//this function  accepts input from a from the viewer sees on the sales page and processes
//the information collected to create a new store


let cookieStandForm = document.getElementById('cookieStandForm');
cookieStandForm.addEventListener('submit', addNewCookieStand);


function addNewCookieStand (event){
    event.preventDefault();
    table.deleteRow(table.rows.length -1);
//assigning new value to property assigned to current property; 
let location = event.target.location.value;
let min = parseInt(event.target.min.value);
let max = parseInt(event.target.max.value);
let avgCookieSale = parseInt(event.target.avgCookieSale.value)


//creates an instance of the newStore object




let newStandAdd = new StoreDetails ( location, min ,  max, avgCookieSale ,[],[],0 );

newStandAdd.render();
footerRow();

document.getElementById("cookieStandForm").reset();

};


























