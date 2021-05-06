
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm ', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let theStoreDetailsArray = [];
//access the form so we can attach an event listener
let cookieStandForm = document.getElementById('cookieStandForm');
//global random function 
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
//theStoreDetailsArray.push(this);
theStoreDetailsArray.push(this)
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
    

};


///table 
let parent = document.getElementById('parent');
let table =document.createElement('table');
parent.appendChild(table);




//render
StoreDetails.prototype.render= function (){
    //let cookieTable = document.getElementById('cookies');

    this.randomCustomers
    this.amountOfCookiesPurchased();
    //let cookieTable = document.getElementById('cookies');
    
//create tr
//for(j=0 ; j<theStoreDetailsArray.length ; j++){
let trElement =document.createElement('tr');
table.appendChild(trElement)
let tdElement = document.createElement('td');
tdElement.textContent = this.location;
trElement.appendChild(tdElement);

//cookieTable.appendChild(trElement);

for (var i=0;i<hours.length;i++){
let tdElement2 = document.createElement('td');
tdElement2.textContent=this.salesPerHour[i];
trElement.appendChild(tdElement2);
    }
    
//total
let tdElement3 = document.createElement('td');
tdElement3.textContent=this.totalPerDay
trElement.appendChild(tdElement3);

//append 


//theStoreDetailsArray.push(this);
};

//create  function for header row of table with hours 

function headerRow (){
    //row
    let hedRow =document.createElement('tr');
    table.appendChild(hedRow);
   
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


let seattle= new StoreDetails ('Seattle',23,65,6.3,[],[],0);



let tokyo = new StoreDetails ('Tokyo',3,24,1.2,[],[],0);


let dubai = new StoreDetails ('Dubai',11,38,3.7,[],[],0);


let paris = new StoreDetails ('Paris',20,38,2.3,[],[],0);


let lima = new StoreDetails ('Lima',2,16,4.6,[],[],0);


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();




//create  function for footer row of table

function footerRow (){
    //row
    let footerRow =document.createElement('tr');
   table.appendChild(footerRow);
   
    let tdElement = document.createElement ('td')
   footerRow.appendChild(tdElement);
tdElement.textContent ='Totals';
let totalEachDay =0;
    let totalEachHour = 0;
    //footer data :
    for(i=0 ; i<hours.length ; i++){
      let totalEachHour=0;
    
        for(j=0; j<theStoreDetailsArray.length; j++){
            totalEachHour+=theStoreDetailsArray[j].salesPerHour[i] 
            
        }

        tdElement2 = document.createElement('td');
       footerRow.appendChild(tdElement2);
        tdElement2.textContent=totalEachHour
     totalEachDay+=totalEachHour
        
        }

        tdElement3 = document.createElement('td');
        footerRow.appendChild(tdElement3);
         tdElement3.textContent=totalEachDay

    
};
footerRow();

//
//add event listener, listening for event, put at bottom for code readability
cookieStandForm.addEventListener('submit', addNewCookieStand);

function addNewCookieStand (event){
    event.preventDefault();
//assigning new value to property assigned to current property; 
let location = event.target.location.value;
let min = event.target.min.value;
let max = event.target.max.value;
let avgCookieSale = event.target.avgCookieSale.value

let newStandAdd = new  StoreDetails (location,min,max,avgCookieSale);

//table.innerHTML = '';
salesPerHour = [];
totalPerDay = 0;
newStandAdd.randomCustomers();
newStandAdd.amountOfCookiesPurchased();
theStoreDetailsArray.push(newStandAdd);
//headerRow();
newStandAdd.render();
//footerRow();
theStoreDetailsArray.push(newStandAdd);


}



















