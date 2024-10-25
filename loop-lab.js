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


// looping in names and ids into cells
let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let cellNum = 1;

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

console.log(' last part')

let title = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let splitRows = title.split("\n");
console.log(splitRows);
for (let element of splitRows){
    let cell = element.split(",");
    console.log(cell[0],cell[1],cell[2],cell[3]);
}






