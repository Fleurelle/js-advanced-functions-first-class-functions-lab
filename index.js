// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers){
    let newArray = [...drivers];
    return newArray.splice(0,2);
  }

const returnLastTwoDrivers = function (drivers){
    let newArray = [...drivers];
    return newArray.splice(newArray.length-2);
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (aValue){
  return function somethingElse(anotherValue){
    return aValue*anotherValue;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnSomething){
  return returnSomething(drivers);
}