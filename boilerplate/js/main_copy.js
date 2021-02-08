//initialize function called when script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    var cityPop = [];

    //create the first city object
    var madison = {};
    //add each property to the object
    madison.city = 'Madison';
    madison.population = 233209;

    //push the city object into the array
    cityPop.push(madison);

    //repeat...
    var milwaukee = {};
    milwaukee.city = 'Milwaukee';
    milwaukee.population = 594833;
    cityPop.push(milwaukee);

    var greenBay = {};
    greenBay.city = 'Green Bay';
    greenBay.population = 104057;
    cityPop.push(greenBay);

    var superior = {};
    superior.city = 'Superior';
    superior.population = 27244;
    cityPop.push(superior);

    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add city column to header row
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add population column to header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the header row
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");
    
        var city = document.createElement("td");
        //first conditional block
            if (cityPop[i].city == 'Madison'){
                city.innerHTML = 'Badgerville';
            } else if (cityPop[i].city == 'Green Bay'){
                city.innerHTML = 'Packerville';
            } else {
                city.innerHTML = cityPop[i].city;
            }
    
            tr.appendChild(city);
    
            var pop = document.createElement("td");
        //second conditional block        
            if (cityPop[i].population < 500000){
                pop.innerHTML = cityPop[i].population;
            } else {
                pop.innerHTML = 'Too big!';
            };
    
            tr.appendChild(pop);
    
            table.appendChild(tr);
        };

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

window.onload = initialize();
