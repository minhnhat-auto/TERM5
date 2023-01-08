// Exercise 1

// let word = "v minh nhat";
// let res = "";
// for (i=0; i<word.length; i++){
//     if(i == 0){
//         res = word[i].toUpperCase();
//     }
//     else if(word[i] == " "){
//         res += word[i];
//         res += word[i+1].toUpperCase();
//         i += 1
//     }
//     else{
//         res += word[i];
//     }
// }
// console.log(res);


// Exercise 2

// function max(num1, num2, num3){
//     let largest = num1;
//         if (largest < num2){
//             largest = num2;
//             if(largest < num3){
//                 largest = num3
//             }
//         }else{
//             if(largest < num3){
//                 largest = num3
//             }
//     }
//     return largest;
// }
// console.log(max(1000, 510, 1666));


// Exercise 3

// function right(str){
//     let count_str = str.length
//     let hold = ""
//     let hold2 = ""
//     if ( count_str < 3|| count_str == 3){
//         console.log(str)
//     }else{
//         for(i=0; i<str.length; i++){
//             if(i < count_str-3){
//                 hold += str[i]
                
//             }else{
//                 hold2 += str[i]
//             }
//         }
//     }
//     let newStr = hold2 + hold
//     return newStr
// }
// console.log(right("bacd"))


// Exercise 4

function angle_Type(type){
    let ans;
    if(type < 90){
        ans = "Acute angle";
    }else if(type == 90){
        ans = "Right angle";
    }else if(90 < type && type < 180){
        ans = "Obtuse angle";
    }else if(type === 180){
        ans = "Straight angle";
    }
    return ans;
}
console.log(angle_Type(111));