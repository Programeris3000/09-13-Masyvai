
let masyvas = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

 console.log(masyvas)
//1
masyvas.shift()
console.log(masyvas)
//2
masyvas.pop()
console.log(masyvas)
//3
masyvas.splice(10,1)
console.log(masyvas)
//4
masyvas.splice(-2, 1)
console.log(masyvas)
//5
masyvas.splice(1,1)
console.log(masyvas)
//6
masyvas.splice(6,2)
console.log(masyvas)
//7
masyvas.splice(-6,3)
console.log(masyvas)
//8
masyvas.splice(2, 1,888)
console.log(masyvas)
//9
masyvas.splice(9 ,1 ,33, 789, 6543)
console.log(masyvas)
//10
masyvas.splice(-1, 1, 321, 654, 987)
console.log(masyvas)
//11
masyvas.splice(1, 0, 11)
console.log(masyvas)
//12
masyvas.splice(13, 0, 1)
console.log(masyvas)
//13
masyvas.splice(-1, 0, -1)
console.log(masyvas)
//14
masyvas.unshift(1, 2, 3)
console.log(masyvas)
//15
masyvas.push(-333, -321, -312)
console.log(masyvas)
//16
masyvas.splice(13, 0, 0)
console.log(masyvas)
//17
masyvas.shift()
console.log(masyvas)
//18
masyvas.pop()
console.log(masyvas)
//19
masyvas.unshift(`Start`)
console.log(masyvas)
//20
masyvas.push(`End`)
console.log(masyvas)

let uzduotis1 = masyvas.slice(0,1)
console.log(uzduotis1)

let uzduotis2 = masyvas.slice(-1,27)
console.log(uzduotis2)

let uzduotis3 = masyvas.slice(1,2)
console.log(uzduotis3)

let uzduotis4 = masyvas.slice(-2,26)
console.log(uzduotis4)

let uzduotis5 = masyvas.slice(7,8)
console.log(uzduotis5)

let uzduotis6 = masyvas.slice(-9,-8)
console.log(uzduotis6)

let uzduotis7 = masyvas.slice(13,14)
console.log(uzduotis7)

let uzduotis8 = masyvas.slice(0,3)
console.log(uzduotis8)

let uzduotis9 = masyvas.slice(-3,27)
console.log(uzduotis9)

let uzduotis10 = masyvas.slice(0,10)
console.log(uzduotis10)

let uzduotis11 = masyvas.slice(-10,27)
console.log(uzduotis11)

let uzduotis12 = masyvas.slice(2,8)
console.log(uzduotis12)

let uzduotis13 = masyvas.slice(-23,9)
console.log(uzduotis13)

let uzduotis14 = masyvas.slice(10,19)
console.log(uzduotis14)

let uzduotis15 = masyvas.slice(-19,17)
console.log(uzduotis15)

let uzduotis16 = masyvas.slice(1)
console.log(uzduotis16)

let uzduotis17 = masyvas.slice(0,26)
console.log(uzduotis17)

let uzduotis18 = masyvas.slice(5,27)
console.log(uzduotis18)

let uzduotis19 = masyvas.slice(0,22)
console.log(uzduotis19)

let uzduotis20 = masyvas.slice(0,13)
console.log(uzduotis20)

let uzduotis21 = masyvas.slice(14,27)
console.log(uzduotis21)

let uzduotis22 = masyvas.slice(1,26)
console.log(uzduotis22)

let uzduotis23 = masyvas.slice(5,24)
console.log(uzduotis23)

let uzduotis24 = masyvas.slice(1,19)
console.log(uzduotis24)

let uzduotis25 = masyvas.slice(7,26)
console.log(uzduotis25)

let uzduotis26 = masyvas.slice(9,15)
console.log(uzduotis26)

let uzduotis27 = masyvas.slice(10,19)
console.log(uzduotis27)

let uzduotis28 = masyvas.slice(7,19)
console.log(uzduotis28)

let firstFive = masyvas.slice(0,5)
let lastSix = masyvas.slice(-6)
let uzduotis29 = firstFive.concat(lastSix)
console.log(uzduotis29)

let firstInterval = masyvas.slice(2,5)
let secondInterval = masyvas.slice(14,17)
let uzduotis30 = firstInterval.concat(secondInterval)
console.log(uzduotis30)