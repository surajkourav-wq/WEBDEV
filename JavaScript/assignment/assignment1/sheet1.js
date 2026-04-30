//Print numbers from 1 to 5 using a for loop.
for(let i = 1; i<6; i++){
    console.log(i);
    
}

//.Print numbers from 1 to 10 using a for loop
for(let i = 1; i<11; i++){
    console.log(i);
    
}

//Print numbers from 10 to 1 (reverse counting)
for(let i =10; i>=1;i-- ){
    
    console.log(i)
    
}

//Print even numbers from 2 to 10
for(let i = 2; i<=10; i+=2)
{
    console.log(i);  
}

//Print odd numbers from 1 to 9. 
for(let i = 1; i<10; i+=2){
        console.log(i);
}

//Print numbers from 1 to 20 with increment of 2
for(let i = 1; i<20; i+=2){
    
    console.log(i);
    
}

//Print numbers from 5 to 50 with increment of 5. 

for(let i = 5; i<50; i+=5){
    
    console.log(i);
    
}


// Print numbers from 1 to 10 that are divisible by 3. 
for(let i = 1; i<=10; i++){
    if(i%3==0){
        console.log(i);
        
    }
}

//Create a loop and print the square of numbers from 1 to 10
for(let i = 1; i<11; i++){
    let square = i*i;
    console.log(`The square of ${i} is ${square}`);
    
}