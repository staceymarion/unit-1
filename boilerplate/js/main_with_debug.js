//code block 1
//initialize function called when script loads
//added this as a check mechanism. runs when all other code is commented out.
$('#mydiv').html('Bugged out');

//code block 2
//initialize function called when the script loads
//function is called cities. initialize the function, then detail the function below
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population assigning array to variable cityPop
	//refer to cityPop when need to access
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	// direct add using method jquery chaining strategy - table is added to the DOM 
	$("#mydiv").append("<table>");

	//append a header row to the table
	// direct add using method chaining strategy - <tr>, table row, is added to the <table>
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	// again, using method chaining strategy. label headers within the first <tr> table row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
	//for each element, i, run through this process. stops at length <1
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable, rowHtml, which makes script cleaner
		//referring to our array, variable cityPop
		//use index with element "i" to go thorugh all elements for city and population
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

addColumns(cityPop); // see function below
addEvents(cityPop); // see function below
};

// code block 3
// call the addColumns function on the variable cityPop, which we assigned to our array
function addColumns(cityPop){
    // iterate over each 
	// alias function?  (note to rob and yuying: the alias functions + method chaining is still very difficult to wrap head around!)
    $('tr').each(function(i){

    	if (i == 0){

    		$(this).append('<th>City Size</th>');  //syntax fix
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';  //syntax fix

    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>'); //syntax fix
    	};
    });
};


// code block 4
function addEvents(){

	$("table").mouseover(function() {   //syntax fix
		
		var color = "rgb(";
		// console.log(color); // success, see in console log
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random; //syntax fix. not a string! refers to variable

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			};

			$(this).css('color', color);
		};
	});

	function clickme() {
		alert('Hey, you clicked me!');
	};

		$("table").on('click', clickme);

	};

//call the initialize function when the document has loaded
$(document).ready(initialize);


