var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
let swag7 = [];
let swag8 = [];
let swag9 = [];

var maal = 8; 

function almost8 (maal, arrayA, arrayB){
    for (let index = 0; index < arrayA.length; index++) {
        for (let index2 = 0; index2 < arrayB.length; index2++) {
            if(array1[index] + array2[index2] == maal){
            swag8.push([array1[index], array2[index2]]);}
                else if (arrayA[index] + arrayB[index2] == maal-1){
                    swag7.push([arrayA[index], arrayB[index2]]);
                }
                else if (arrayA[index] + arrayB[index2] == maal+1){
                    swag9.push([arrayA[index], arrayB[index2]]);
                }
            
            
        
    }
    
    }
}
almost8(maal, array1, array2);

console.log(swag7)
console.log(swag8)
console.log(swag9)