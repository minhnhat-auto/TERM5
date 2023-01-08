// // Exercise 1

// const gretter = (myArray, counter) =>{
    
//     let greetText = 'Hello ';

//     for(const ele of myArray){
//         console.log(`${greetText} ${ele}`);
//     }
// }

// gretter(["Randy Svage", 'Ric Flair', 'Hulk Hogan'], 3)

// Exercise 2

// const capitalize = (str) =>{
//     let final = "";
//     for (let x = 0; x < str.length; x++){ 
//         if (x == 0){
//             final += str[x].toUpperCase();
//         }else{
//             final += str[x].toLowerCase();
//         }

//     }
//     console.log(final);
// }

// capitalize('nodeJs');

// Exercise 3

// let colors = ['redG', 'green', 'blue'];

// const capitalizeColors = () =>{ 
//     let beg = colors.map(function(item){
//             let final = ""
//             for (let x = 0; x < item.length; x++){ 
//                         if (x == 0){
//                             final += item[x].toUpperCase();
//                         }else{
//                             final += item[x].toLowerCase();
//                         }
//                     }
            

//         return final
//         })
//         console.log(beg);
// }

// capitalizeColors();

// Exercise 4

// let values = [1, 60, 30, 55, 6, 7, 20, 11, 19]

// const filterLessThan20 = () =>{
//     let comp = values.filter(function(num){
//         if(num < 20){
//             return num
//         }
//     })
//     console.log(comp);
// }

// filterLessThan20()

// Exercise 5

// let array = [1,2,3,4]

// const calculateSum = () =>{
//     let beg = array.reduce(function(total, item){
//         return total + item
//     }, 0);
//     console.log(beg);
// }

// const calculateProduct = () =>{
//     let beg = array.reduce(function(total, item){
//         return total * item
//     }, 1);
//     console.log(beg);
// }

// calculateSum();
// calculateProduct();


// Excercise 6

class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details = () => {
        return `Model: ${this.model} Engine ${this.year}`
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    info = () =>{
        return `${this.model} has a balance of ${this.balance}`
    }
}

let car2 = new Car('Pontiac Fir', 1976);
console.log(car2.details());
let sedan = new Sedan('volvo sd', 2018, 3000);
console.log(sedan.info());

