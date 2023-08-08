// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
const filterOutOdds = (...nums) => nums.filter(num => num % 2===0)

const findMin =(... arguments) => Math.min(...arguments)

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2})

const doubleAndReturnArgs = (arr, ...arguments) => ([...arr, ...arguments.map(
(val =>val*2))])

const removeRandom = (items) =>{
 let randomIndex= Math.floor(Math.random() * items.length)
 return [...items.slice(0,randomIndex),...items.slice(randomIndex+1)]
    
}
const extend = (array1,array2)=> [...array1,...array2]
 
const addKeyVal =(obj,key,val) =>{
    let newObj= {...obj}
    newObj[key]=val
    return newObj
}

const removekey = (obj, key) =>{
    let newObj={...obj}
    delete newObj[key]
    return newObj
}

const combine =(obj1,obj2) => ({...obj1,...obj2})

const update =(obj, key, val) => {
    let newObj= {...obj}
    newObj[key]=val
    return newObj
}
