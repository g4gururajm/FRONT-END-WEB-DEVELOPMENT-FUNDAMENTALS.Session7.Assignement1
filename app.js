/* Function area of circule with passing argument called radius*/
function Area_Of_Circle(radius){
	return ((radius * radius * Math.PI).toFixed(0)); // returning value from function
};
/* display on console about receiving value of radius which is directly prompt gets and return area of circle*/
console.log("Area of the Circle is: " + Area_Of_Circle(  prompt("Please set the radius of circle:  ") ));

