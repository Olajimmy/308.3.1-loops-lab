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
console.log("test")
//
