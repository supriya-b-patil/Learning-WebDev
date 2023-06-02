let countries = ["japan", "india", "USA"]
let world = ["africa", "america", "australia"]

let capitals = {
    japan: "tokyo",
    india: "Delhi",
    USA: "newyork",

    getCapital: function(){
        console.log(`capital of india is ${this.india}`)
    }
}


Object.prototype.supriyas = function(){
        console.log(`supriya is studying in VJTI, Mumbai`); 
}

Array.prototype.hey = function(){
    return string.trim().length()    
}

String.prototype.truelength = function(){
    console.log(`true length is : ${this.trim().length}`);
}

let car = "    serdf   ";
// Inheritance

const akshay = {
    location : "Banglore",
    work: "React",
}

const sweety = {
    foodie : true,
    IQ: "high",
    truelength : function (string){
        return string.trim().length
    }
    
}

const supriya = {
    education :"MCA",
    age: 27,
    native: "kolhapur",
    __proto__:sweety
}

const amol = {
    education : "BE",
    Occupation : "Sw engg.",
    hobby: "bike-riding"
}

akshay.__proto__=sweety
akshay.foodie

// modern syntax to inheritance
// props of object supriya inherited by object amol
Object.setPrototypeOf(amol, supriya)

// get truelength of string


