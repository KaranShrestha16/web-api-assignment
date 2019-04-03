// variable decleration and initilization
const array =[1,9,8,7,10,11,11,13,7]; 
const input=11;
let repet;

// declear Function 
function repeted(){
// for loop start 
for(i=0;i<array.length;i++){
    if(array[i]== input){
        repet="True";
    }
}
}
// calling function 
repeted();

console.log("Check "+repet);