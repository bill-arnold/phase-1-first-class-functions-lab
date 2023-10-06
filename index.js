// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function to create a fare multiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on the provided function
const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
};


const drivers = ['Driver 1', 'Driver 2', 'Driver 3', 'Driver 4'];

console.log(returnFirstTwoDrivers(drivers)); 
console.log(returnLastTwoDrivers(drivers));  
console.log(selectingDrivers[0](drivers));    
console.log(selectingDrivers[1](drivers));    
console.log(fareDoubler(10));                  
console.log(fareTripler(10));                  
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 

