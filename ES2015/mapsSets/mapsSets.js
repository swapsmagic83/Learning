new Set([1,1,2,2,3,4]) 
// {1,2,3,4}

let str=[...new Set('referee')].join('')
// 'ref'

let m=new Map()
m.set([1,2,3],true)
m.set([1,2,3],false)
// {[1,2,3]=>true,[1,2,3]=>false}

const hasDuplicate = (arr) =>{
    if(new Set(arr).size!==arr.length){
        return true
    }
    return false
}
    
const vowelCount = (str) =>{
    const vowelMap= new Map()
    let vowels='aeiou'
    for(let char of str){
        let lowerCaseChar= char.toLowerCase()
        if(vowels.includes(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1)
            }else{
                vowelMap.set(lowerCaseChar,1)
            }
            
        }
    }
    return vowelMap
}
