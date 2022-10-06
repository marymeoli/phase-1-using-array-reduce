const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// batteryBatches.reduce(batteries, 0)


//function batteries(accumulator, element){
//   let totalBatteries = accumulator + element
//  return totalBatteries
//}

 let totalBatteries = batteryBatches.reduce(function (accumulator, element){
     return accumulator + element},0)
  //  code your solution here