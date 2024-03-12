// //union 
// let a:string | number |boolean = "hamzah";

// a = "aydfkjhzj"
// a = 38948;
// a = true;

//hame kisi number ke ander point lagane hai tu tofixed ka method use karen ge
// let age = 22;

// age.toFixed(2);

// console.log(age);

// let fname:string = "ghsadg";

// console.log(fname.toUpperCase())
//narrowing
// let age : string | number  ;

// age.
//comon methodayen ge

// let age : string | number  ;

// age = 22;

// age.
//number ke related de ga

// let age : string | number  ;

// age = 22;//narrowing data type ho gai hai
// age = "22";//we can do this//hamari original data type me number and string dono hai

// let age :string | number= "22"//type script ka feature

// console.log(typeof age)//java script me builtin hai java script ka function hai ts me bhi use hota hai
// //value ko parta hai us ki vbase pe answer deta hai

let age:string |number=234 ;
if (typeof  age === "string"){//ap use compare nhi krsakte jiski vallue define na ho
  age
}else{
    age
}

//math.random ki range 0 se 1 tak hai
// console.log(Math.random())

// let newage = Math.random() > 0.5? 22 :"khan";

// console.log(newage);

//narrowing
// let newage = Math.random() > 0.5? 22 :"khan";

// if (typeof newage === "string"){
// newage.toUpperCase()
// }else{
//     newage.toFixed(22)
// }

// //litral type
// // let trafficlights:"red"|"green"|"yellow" ="yellow; //string nhi dege warna apni marzi se koi bhi color add kr salte hai

// // let trafficlights:"red"|"green"|3 ="yellow";

// // trafficlights= 3;

// //quize topic structrul typing

// let teacher :{
//     name:string;
//     slary:number
//     "full-name":string
// }= {
// //     name:"humza",
// //     slary:30000,
// //     "full-name":"humzah syed"
// // }

// // teacher.name//
// // console.log(teacher["full-name"])

// // underscore ap . ke sath bhi use kr sakte hain

// // let teacher:{name:string, exp:number}{

// // }
// //apne koi type ka short likhna ho type aliased

// type Student = string|number|boolean

// // let a:string|number|boolean

// type student={
//     name:string
//     age:number;
// }

// let student1 = {
//     name:"hamzah",
//     rollnumber:10
// }
// let student2 = {
//     name:"hamzah",
//     rollnumber:10
// }
// let student3 = {
//     name:"hamzah",
//     rollnumber:10
// }

type deal1 = {
    food:string;
}

type deal2= {
    food :string,
    drink:string
}

let humza  : deal1 = {
    food:"biryani"
}

let okasha  : deal2 = {
    food:"biryani",
    drink:"cooldring"
}

// let a =22;
// let b = "dsd"

// a=b;

humza= okasha;
console.log(humza);
// okasha = humza;
// ts ap ke pass apke object ke structure ko dekh rhi hai


// interface deal1  {
//     food:string;
// }

// type deal2= {
//     food :string,
//     drink:string
// }

// let humza  : deal1 = {
//     food:"biryani"
// }

// let okasha  : deal2 = {
//     food:"biryani",
//     drink:"cooldring"
// }

//type hamesha structure dekhtimnahi

//stal object 
// let student = {name:"hauza"}
// console.log(student)

// let student2 = student

const numbergen = Math.floor(Math.random()*10);
console.log(numbergen)