
var sum = 34;
var product="bag";
var tax=0.5
console.log(product)
console.log(sum + tax)

var Fruitname= "Jackfruit"
var Count = 30;
var Price= 1050
var total =30 * 35
console.log(Fruitname)
console.log(total)

//Pre increment
var a = 10
var b= ++a
console.log(b)

var g =10
var h =--g
console.log(h)
//Post increment
var c =10
var d =c++
console.log(d)
console.log(c)
//Post decrement
var e =10 // when it meet same variable that console take second same variable 
var f =e--
console.log(f)
console.log(e)

// It's Also Pre Increment
let x=5
let y=++x
console.log(y)
console.log(x)


//Using Function Method
function iphone(){
console.log(" this is my mobile brand")
}
iphone()

var j =10
var k =10
function add(){
    console.log(j+k)
}
add()

var Favour = "Ayisha Parveen";
var FavourPLAY="ABD";
var FavourMovie="Busker"
function addmyfavour(){
    console.log("Favouract :"+Favour)
    console.log("Favourplayer :"+FavourPLAY)
    console.log("Favourmovie :"+FavourMovie)
}
addmyfavour()

function math(i,l){
    
 console.log(i+l)
}

math(10,20)

function geniour(p,z){
    var v=p*z
    console.log("Area is"+v)
}
var length =10
var breath =20
geniour(10,20)

//Using Return Key
function myname(){
    return 'yasar'
}
var t=myname()
console.log(t)

function name(n,m){
   return n+m
}
var total= name(10,40) 
console.log(total)

//if else Topic and examples
var rain = true
if(rain){
    console.log("Take an Umbrella")
}else{
    console.log("Enjoy The Sunshine")
}
var Homework = false
if(Homework){
    console.log("Great job")
    return("Finsh your homework")
}
else{
    console.log("FiFinsh your homework Before Playing")
}

/*are there any cookies left? 
// if yes "would you like a cookies?" 
// if No "time to take more cookies"
*/

//Logical OR,AND,NOT

console.log(true && false && true)//And
console.log(false || true || true)
console.log(true || false || false)
console.log(! true)
console.log(!false)

var color ="yellow"
if(color == "red"){
    console.log("Stop")
}
if(color == "yellow"){
    console.log("Get Ready")
}
if(color == "Green"){
console.log("Go")
}

var season = "Winter"
if(season == "spring"){
    console.log("Enjoy the blooming flowers")
}
if(season == "Summer"){
    console.log("Have fun in the Sun")
}
if (season =="Autumn"){
    console.log("Admire the colorful leaves")
}
if (season == "Winter" ){
    console.log("Bundle up and stay warm")
}

var Score =90
if(Score<=50){
    console.log("You need to improve")
}else if(Score>50 && Score<=70){
 console.log("Good Job")
}else if(Score>90)
{
    console.log("Excellent Keep Rock like this")
}

var Vowels="u"
  if (Vowels = 'a') {
    console.log("Vowel :"+'a')
  }
  else if (Vowels = 'e'){
    console.log("Vowel :"+'e')
} 
  else if (Vowels = 'i') {
  console.log("Vowel :"+'i')
  }
  else if (Vowels = 'o'){
    console.log("Vowel :"+'o')
  } 
  else if (Vowels = 'u'){
    console.log("Vowel :"+'u')
  } ;

  //For Loops
  for(Count=1;Count<=10;Count=Count+1)
    {
        console.log("Yasar")
    }

for(Count=1;Count<=20;Count=Count+1){
    console.log(Count)
}
// Using For Loops for Reverse Method without Reverse key 
for(Count=10;Count>=1;Count=Count-1){
    console.log(Count)
}
// print only even number usinf if and for loop
for(Count=2;Count<=10;Count=Count+2){
    console.log(Count)
}

//print 2 tables
for(Count=1;Count<=10;Count=Count+1){
    console.log(Count + "x 2 =" + (Count *2))
}

for (Count=10;Count<=10;Count=Count+2){
    console.log(Count +"x 3 ="+(Count*3))
}
//function Example
function myFunction() {
  console.log("yasar")
}
myFunction()



let person = "John Doe", carName = "Volvo", price = 200;
console.log(person)

let n = "5" +3+3
console.log(n)
//using Underscore

let _x = 2;
let _100 = 5;
console.log(_100)



let o = 2;   // Allowed

{
let o = 3;   // Allowed
}

{
let o = 4;
console.log(o)    // Allowed
}
// Array Using Constant
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[3] = "Toyota";

// Add an element:
cars.push("Audi");
console.log(cars)

//object Using Constant
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
console.log(car)

//AND &
let bit=5&5
console.log(bit)
//OR|
let bit1=5|1
console.log(bit1)
//NOT~
let bit2= ~ 19
console.log(bit2)

//XOR^
let bit3=5^6
console.log(bit3)
//Left Shift <<
let bit4=5<<1
console.log(bit4)

//right Shift>>
let bit5=5>>>1
console.log(bit5)

//right Shift>>>
let bit6=5>>1
console.log(bit6)

var hour=3
if (hour < 18) {
 console.log("Good day");
} else {
  console.log("Good evening");
}

let text = "";
let i = 0;

while (i < 5) {
  text += i;
  i++;
console.log(text)
}
var time=23
if (time < 10) {
 console.log("Good morning");
} else if (time < 20) {
  console.log("Good day");
} else {
  console.log("Good evening") ;
}


{var yas= 3
}
console.log(yas)


{let yas1 =3
console.log(yas1)
} 

