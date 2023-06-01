
// string, number, bigint, boolean, null, undefine, symbol : not object
const resume = {
    education : "MCA",
    college: "Vjti",
    score :{
        SSC: 86.55,
        HSC: 76,
    }
}

resume["degree"] = "B.Pharm"
// console.log(resume);


// part2
const resume2 = new Object()
resume2.HSC = 90

// console.log(resume2)

// part3 inheriting
const travel = {
    city : "Paris",
    country: "USA" ,
    work : "netherlands", 
    
};

//inheriting from 'travel'
const resume3 = Object.create(travel);

// console.log(Object.getPrototypeOf(resume3));

// part 4
// const resume4 = Object.create({})
// Object.defineProperty(resume4, "language",
//     {get: () => "English", 
//     set: (lan)=> {
//         console.log("setting lang to :", lan)
//     },
//     enumerable: true

// });

// console.log(resume4.language);
// console.log(Object.getPrototypeOf(resume4));


// resume4["language"]= "Python"
// resume4.skills = "React"
// resume4.language = "hindi"
// console.log(resume4)

// Part 5
const india = {
    capital : "Delhi",
    emblem : "4-lions",
    population : 0,
    popRise: function(){
        this.population = parseInt(this.population) + 200;
        console.log(this);
    }

    // OR
    // popRise(){
    // }
    // OR
    // popRise: () => {
    //     this.population += 200
    //     this not accessible in arrow
    // }
};

console.log(india.population);
