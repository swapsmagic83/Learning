let color='teal'
let obj={}
obj.color= '#3456FF'
obj[color]= '#3456FF'

for(let [k,v] of Object.entries(obj)){
    console.log(k,v)
}
const add=(x,y) => x+y
const mult=(x,y) => x*y
const square=(x) => x+x
const power=(x,y) => x**y
let myMath ={}
myMath.add=add
myMath.mult=mult

// let myMath={add,mult,square,power}
// const myMath={
//     add: function(x,y){
//         return x+y
//     },
//     mult: function(x,y){
//         return x*y
//     }
// }

function getHypotenuse(a,b){
    return Math.sqrt(a ** 2 + b ** 2)
}
function getArea(a,b){
    return a * b / 2
}

let side1=4;
let side2=3;
const side3= getHypotenuse(side1,side2)
const area= getArea(side1,side2)

const rightTriangle = {
    a:9,
    b:12,
    printThis(){
        console.log(this)
    },
    getArea(){
        return this.a * this.b/2
    },
    getHypotenuse(){
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

function Triangle(a,b){
    this.a=a
    this.b=b
    // this.getArea= function(){
    //     return this.a * this.b/2
    // }
    // this.getHypotenuse= function(){
    //     return Math.sqrt(this.a ** 2 + this.b ** 2)
    // }    
}
Triangle.prototype.getArea = function(){
    return this.a * this.b /2
}
Triangle.prototype.getHypotenuse = function(){
    return Math.sqrt(this.a ** 2 + this.b ** 2)
}
const tri1= new Triangle(3,4)
const tri2= new Triangle(9,12)

class Triangles{
    constructor(a,b,c){
        for(let side of [a,b,c]){
            if(!Number.isFinite(side) || side <=0){
                throw new Error('not valid')
            }
        }
        this.a=a
        this.b=b
        this.c=c
    }
    greet(){
        console.log('Hello from triangle')
    }
    display(){
        return `Triangle with sides of ${this.a} ${this.b} and ${this.c}`
    }
    getArea(){
        const {a,b,c}=this
        const s=(a+b+c)/2
        return Math.sqrt(s * (s-a) * (s-b) * (s-c))
    }
    isBig(){
        return this.getArea()>50
    }
}
// const firstTri= new Triangles()
// firstTri.a=3
// firstTri.b=4
const firstTri= new Triangles(3,4,5)
const secondTri= new Triangles(5,9,10)
const thirdTri = new Triangles(30,40,50)

class RTriangle extends Triangles {
    constructor(a,b,c){
        if(a*a+b*b !== c*c){
            throw new Error ('Invalid right triangle')
        }
        super(a,b,c)
    }
    isRigthTriangle(){
        return true
    }
    display(){
        return 'Right' + super.display()
    }
}
const myRTriangle= new RTriangle(3,4,5)

const cat={
    name: 'Blue',
    breed: 'Scotish Fold',
    dance: function(dancetype){
       
        console.log(`I am a ${this.name} and I like to ${dancetype}` )
    },
    play: function(...toys){
        for(let toy of toys){
            console.log(`${this.name} plays with ${toy}`)
        }
    },
    greet(){
        console.log("This is: ", this)
        alert(`${this.name} says HELLOO`)
    }
}
 cat.dance('salsa')
 const blueCat= cat.dance
blueCat.call(cat,'garba')
const bindDance= blueCat.bind(cat)

const coco={
    name:'coco',
    breed:'labdoodle'
}
const cocoDance = cat.dance.bind(coco)
const dog={
    name:'sunny',
    breed: 'golden retriever'
}
blueCat.call(dog,'play')

function whatIsThis(){
    console.log('this=', this)
}
let obj1={
    func:whatIsThis,
    color:'Purple'
}
obj1.func()

function applySalesTax(taxRate, price){
    return price + price * taxRate
}
const caliTax = applySalesTax.bind('null',0.0725)
const txTax= applySalesTax.bind('null',0.0225)

// function doMath(number, x){
//     return number * x
// }
// const calculation1= doMath.bind(null,20)
// const calculation2=doMath.bind(null,30)
const bobsMembership={
    name:'Bob',
    total: 250,
}
const jillsMembership = {
    name: 'Jill',
    total: 899
}
function collectMonthlyFee(fee){
    const remaining = this.total-fee
    this.total= remaining
    return this.name +' remaining balance: '+ this.total//can use remaining
}

const collectBobFee = collectMonthlyFee.bind(bobsMembership,5)
const collectJillFee=collectMonthlyFee.bind(jillsMembership,50)



const btn= document.querySelector('#btn')
btn.addEventListener('click',cat.greet.bind(cat))
const btnA= document.querySelector('#a')
const btnB= document.querySelector('#b')
const btnC= document.querySelector('#c')

function popUp(msg){
    console.log(this)
    alert('Secret message is ' + msg)
}

btnA.addEventListener('click', popUp.bind(null,'Button A says HIII'))
btnB.addEventListener('click', popUp.bind(null, 'Button B says HIII'))
btnC.addEventListener('click', popUp.bind(null, 'Button C says HIII'))

class Square{
    constructor(a,b,c,d){
        this.a=a
        this.b=b
        this.c=c
        this.d=d
    }
}

function getArea(){
    return this.sqArea()
}
function sqArea(){
    this.a*this.b
} 

let evenSquare= new Square(2,2,2,2)
console.log(evenSquare.getArea)
   
let myObj = {
    name1: 'myObj',
    type: "object",
    print: function() {
        console.log(`Hello: ${this.name1}`)
        return "Hello"
    }
}

var func1 = myObj.print

const greeter = {
    msg: "Greeter",
    sayHi: () => {
        alert(this.msg)
    },
    waitAndGreet: function(delay) {
        setTimeout(() => {
            console.log(this)
            alert("HIIII!")
        }, delay)
    }
}