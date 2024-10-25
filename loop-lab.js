//part one
console.log("loop from 0-100")
let x=0;
for(x>=0; x<=100; x++){
    //console.log(x)
    if(x%3 === 0){
        console.log('fizz')

    }else if(x%5 ===0){
        console.log('buzz')
    }else if(x%3===0 && x%5===0){
        console.log("fizzbuzz")
    }else if (x%3 !==0 || x%5 !==0){
        console.log(x)
    }

}

console.log('***********prime numbers*****************')
//prime numbers
console.log("#Part2: Prime Number");
let isPrime = false;
let number = 4;
while (!isPrime) {
    number++;
    if (number == 2) {
        console.log(number + "is Prime Number");
        isPrime = true;
    }
    else {
        if (number > 1) {
            for (let i = 2; i <= number - 1; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
                else {
                    isPrime = true;
                }
            }
        }
        if (isPrime) {
            console.log(number);
        }
    }
}



/*
//part 2
console.log("prime number test")
// program to check if a number is prime or not

// take input from the user
let number = 2;
let isPrime = true;
for(number>1; number<=50; number++){

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number/2
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}

}//end for loop

*/


/*
let y=10;

if(y<1){
    console.log('enter number greater than 1');
}else if (y>1 && y%(Math.sqrt(y)) !==0){
    console.log("we might have a prime number")
}
*/
/*
//console.log((Math.sqrt(25)))
console.log('prime section')
let n=2;
if (n<2){
   
for (i=2; i<n; i++){
    if(n%i ===0){
        console.log(n,"is not a prime number")
    }
}

}
let sum = 0;

for (let i = 0; i < 5; i++) {

if (i % 2 === 0) continue;

  sum += i;

}

console.log(sum);
*/



let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// Loop through characters in string
// Loop through characters in string
let cell = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let cellNum = 1;
// For each character
for (let i = 0; i < data.length; i++) {
    let char = data[i];

    if (char == "," || char == "\n") {
      switch (cellNum) {
          case 1:
              cell1 = cell;
              break;
          case 2:
              cell2 = cell;
              break;
          case 3:
              cell3 = cell;
              break;
          case 4:
              cell4 = cell;
              break;
      }
      if (cellNum == 4){
          cellNum = 1;
      }
      else {
          cellNum += 1;
      }
      cell = "";
  } else {
      cell += char;
  }
    if (char == "\n"){
        console.log(cell1, cell2, cell3, cell4);
        cell = "";
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
    }
}







/*
let y=2;
let n =2;
let primenumbers;

//let isPrime = true
for (y > 0; y <= 50; y++){
    for(n=2; n<=y/n; n++){
        if (n%y ===0){
        isPrime = false
        break
        }
    }
if(isPrime){
    console.log(y)
}

}
*/






//
