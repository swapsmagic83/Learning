// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

function createInstructor(firstName, lastName){
    return {firstName,lastName}
}

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

var favoriteNumber =42
var instructor = { 
    firstName : 'colt',
    [favoriteNumber] : 'That is my favorite!'
}

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }
var instructor ={ 
    firstName: 'colt',
    sayHi() {
        return'Hi!'
    },
    sayBye(){
        return this.firstName + 'says bye!'
    }
}  
// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

function createAnimal(species, says, sound){
    return {species,
        [says](){
            return sound
        }
    }
}