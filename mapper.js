// const myMap = (arr, iteratorFn) => {
//     //Your code goes here. using array.reduce
    
   
//  }
 
//  myMap([1,2,3,4,5], num => num + 2); //should return [3,4,5,6,7]
//  myMap([‘a’,’b’,’c’], (letter, index) => ({ [letter]: index }); //should return [{a: 0}, {b:1}, {c: 2}]
 
 
const myMap2 = (arr,iteratorFn) =>{

    return arr.reduce((acc,item,index)=>{
        //console.log('acc',acc);
        acc.push(iteratorFn(item,index));
        return acc;
    },[])


}

const myMap = function(iteratorFn){

    return this.reduce((acc,item,index)=>{
        //console.log('acc',acc);
        acc.push(iteratorFn(item,index));
        return acc;
    },[])


}

Array.prototype.myMap = myMap;

//console.log(myMap([1,2,3,4,5], num => num + 2));

//console.log(myMap(['a','b','c'], (letter, index) => ({ [letter]: index })));

console.log([1,2,3,4,5].myMap(num => num + 2));