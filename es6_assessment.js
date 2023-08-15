// 1. How to preserve the immutability on my heroes list? Solve below problems using the same

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]
// a. Get heroes who are not evils
let non_evil = heroes.filter((hero)=>hero.isEvil === false);
console.log(non_evil)

// b. Print Unique family names
let uniFam = heroes.reduce((curFam, nextFam, index, array)=>{
    curFam[nextFam.family] = curFam[nextFam.family] ? curFam[nextFam.family] + 1 : 1;
    return curFam
    }, new Set())
console.log(uniFam)

// c. Print Hero Names from given objects, and append sir in each of them before printing
let sir = heroes.map((hero)=> {
    if(hero.family == "Marvel") { 
            return { name: `Mr. ${hero.name}`}
    }else{ 
        return ""
    }}).filter(q=>q!="")
console.log(sir)

// d. Do we have any hero in Marvel Family who is not evil
let marvel_evil = heroes.some((hero)=> hero.isEvil == false)
console.log(marvel_evil)

//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
console.log('\n==Map==')
const ex_map = new Map([
    ['a', 1],
    ['b',2],
    ['c', 3]
])
console.log(ex_map)
ex_map.set('a', 4)
console.log(ex_map)
console.log('Value of b: ',ex_map.get('b'))
ex_map.delete('c')
console.log(ex_map)
ex_map.clear()
console.log('Map size: ',ex_map.size)

console.log('\n==Set==')
const ex_set = new Set(['melon','mango','apple'])
console.log(ex_set)
console.log(ex_set.values())
ex_set.add('banana')
console.log(ex_set)
console.log('Has carrot? ',ex_set.has('carrot'))
ex_set.forEach((value) => {
    console.log(value);
 });

//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
console.log('\n==Promise==')
// let ex_promise = new Promise((resolve, reject)=>{
//     //set timeout is assumed to be the server call / async call
//     setTimeout(() => {
//         resolve({
//             "Feature 1" : "Arrow Function",
//             "Feature 2" : "Default Params",
//             "Feature 3" : "Promises",
//             "Feature 4" : "TemplateLiterals",
//             "Feature 5" : "Destructuring",
//             "Status" : "Success",
//             "Status Code" : 100
//         })
//     }, 2000);    
//     setTimeout(() => {
//         reject({ 
//             "Status" : "Failed",
//             "Status Code" : 500
//         })
//     }, 3000);    
// })

// console.log("Promise Status!!! ", ex_promise);

// ex_promise.then((data)=>{ // promise is fullfilled or resolved - success response
//     console.log(data)
// }).catch((err)=>{ // promise is rejected - errorneous response
//     console.log(err) 
// })
// console.log("Promise Completed!!!");

//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example
console.log('\n==Spread and Rest==')
let arrNum = [25, 26, 2, 7,8,9, 3, 650]

function SumRest(p1, p2, ...restParams) {
    console.log(...restParams)
    let result = 1;
    for (let i=p1; i<=p2; i++) {
        result*=i;
    } 
    return result;
}
console.log(SumRest(1,5,['Van','Liam', 'Arit']))

//5. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
console.log('\n==Destructuring==')
let {userDetails:{last,number=9119119110}} = person
console.log(last)
console.log(number)

//6. Give me an example of const data manipulation
console.log('\n==Const data==')
const user = {
    name : "Van", session : "ES6"
}
//user = { name : "Van Phan", session : "JS" } //immutable cannot be changed
user.name = "Phan"  //reference can be changed
console.log(user)

//7. What is the difference between for-of and for-in show with examples
console.log('\n==For-of==') //Maily for string and number array
let fruits = ['banana', 'apple', 'peach']; 
for (const fruit of fruits) {
    console.log("\t"+ fruit)
}

console.log('\n==For-in==') //Maily object
let myinfo = {fname:"Van", lname:"Phan", age:25, address : {}}; 
for (const key in myinfo) {
    const element = myinfo[key];
    console.log(element)
}

//8. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded
console.log('\n==Multi promises==')
let signin = new Promise((resolve, reject)=>{ 
    setTimeout(() => {
        resolve({
            "status" : "success",
            "status code" : 200,
            "msg" : "Sign in successfully!",
        })
    }, 1000);

    setTimeout(() => {           //failed message would raise
        reject({
            "status" : "failed",
            "status code" : 404,
            "msg" : "Sign in unsuccessfully!",
        })
    }, 2000);
})

let userregistration = new Promise((resolve, reject)=>{ 
    setTimeout(() => {
        resolve({
            "status" : "success",
            "status code" : 200,
            "msg" : "Register successfully!",
        })
    }, 2000);
})

let nextpageToNavigate = new Promise((resolve, reject)=>{ 
    setTimeout(() => {
        resolve({
            "status" : "success",
            "status code" : 300,
            "msg" : "Move to next page!",
        })
    }, 3000);

    setTimeout(() => {
        reject({
            "status" : "failed",
            "status code" : 404,
            "msg" : "Cannot move to next page!",
        })
    }, 4000);
})

Promise.all([
    signin,
    userregistration,
    nextpageToNavigate
]).then((data)=>{console.log("Promises ", data)})
.catch((err)=>{console.log("Error ",err)})

//9. In question number 9 we need to check the status of each promise and we can move to the next page even if nextpageToNavigate 
//   call gets failed however nothing should be done if first to fails, give me an example of concurrent promises
//   with which we can achieve such scenarios


// Optional -
//10. Using the promise object at #3 create an async and await feature

