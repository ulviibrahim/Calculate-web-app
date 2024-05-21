// class  User{
//     constructor(name,surname,age,fullName){
//         this.name=name,
//         this.surname=surname,
//         this.age=age
//         this.fullName=function(){
//             console.log(` Siz - ${name} ${surname}-suz`);
//         }
//     }
// }


// const Ulvi=new User('Ulvi','Ibrahimov',30,fullName)

// let data= prompt('metn daxil edin')

// function writeConsole(data){
//     console.log(data)
// }
// writeConsole(data)
// let username=prompt('Adinizi daxil edin')
// let password= prompt('password daxil et');

// function userLog(username,pass){
//     if(username=='Admin'&&pass=='admin123'){
//         alert('tebrikler')

//     }else{
//         alert('sifre ve ya istifadeci yanlisdir')
//     }
// }
// userLog(username,password)


// let userPass=prompt('parol teyin edin');
// function validatePassword(kod){
//     if(kod.indexOf('@')==true||kod.length>8){
//         console.log('var')
//     }else{
//         console.log('yanlisdir')
//     }

// }
// validatePassword(userPass)

// class User{
//     constructor(name,surname){
//         this.name=name,
//         this.surname=surname
//     }
// }

// let Ulvi= new User('Ulvi','Ibrahimov')

// let a='salam'
// let b=a.split

// console.log(b.reverse(''))

// let arr=[{name:'Murad'},{name:'Ferid'}]
// let a= 'Salam f necesen'

// for(let i=0;i<a.length;i++){
//     if(a[i]=='f'){console.log(a[i])}

// }
// let first=['a','d','b','z']
// let second=['d','a','z']

// for(let i=0;i<first.length;i++){
//     for(let j=0;j<second.length;j++){
//            if(second[j]==first[i]){
//             console.log(second[j])
//            }
//     }
// }
// ?
//let first=[1,2,3,4,2,1,4,2,3,5,5]
// let sec=[]
// let rep=0
// for(let i=0;i<first.length;i++){
//     rep=i
//     if(first[i]!=rep){
//         console.log(first[i])
//        sec.push(first[i])
//     }
// }
// console.log(sec)

// let text=prompt('yazin');
// let c= text.split("")
// let x=c.join(" ")
// let rev=c.reverse()
// let d=rev.join(" ")
// if(d==x){
//     console.log('poli teksdir')
// }

// let arr=[
//     {name:"Ulvi",salary:500},
//     {name:"Ferid", salary:1500}
// ]
// let result=0
// for(let i=0;i<arr.length;i++){

//    result+= arr[i].salary
// }
// console.log(result)

// let a=()=>{
//     console.log('a funksiyasi isledi')
// }
// let b=()=>{
//     console.log('b funksiyasi isledi')
// }
// let c=()=>{
//     console.log('c funksiyasi isledi')
// }
// let d=()=>{
//     console.log('d funksiyasi isledi')
// }


// let text=prompt('msg');
// switch(text){
//     case 'a':
//         a()
//         break;
    
//     case 'b':
//         b()
//         break;
//         case 'c':
//             c()
//             break;
//             case 'd':
//                 d()
//                 break;
//             }
        
// const text = prompt("Metn daxil edin");

// const printText = (a) => {
//   const result = a.slice(0, 15);
//   console.log(`${result}...`);
// };
// printText(text);

// const login = "Farid";
// const loginPassword = "Farid12345";

// const userName = prompt("Adinizi daxil edin");
// const userPassword = prompt("Sifrenizi  daxil edin");

// const checkLogin = (username, password) => {
//   if (username == login && password == loginPassword) {
//     alert("User login");
//   } else {
//     alert("Username or password is wrang");
//   }
// };

// checkLogin(userName, userPassword);

//! validatePAssword

// const password = prompt("Sifrenizi daxil edin");

// const validatePAssword = (a) => {
//   if (a.length < 8) {
//     return false;
//   } else {
//     if (a.includes("@")) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// // console.log(validatePAssword(password));

// class User {
//   constructor(name, surname, age, validatePassword) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.validatePassword = validatePassword;
//   }

//   checkPAssword() {
//     if (this.validatePassword) {
//       console.log(
//         this.name +
//           " " +
//           this.surname +
//           " " +
//           "User created " +
//           " " +
//           this.validatePassword
//       );
//     } else {
//       console.log("User failed");
//     }
//   }
// }

// const farid = new User("Farid", "Yusifzade", 29, validatePAssword(password));

// farid.checkPAssword();

// let a = prompt("soz daxil edin");

// const reverseStr = (text) => {
//   let arr = text.split("").reverse();
//   let result = arr.join("");
//   console.log(result);
// };
// reverseStr(a);

// let arr = [
//   { name: "Farid", salary: 500 },
//   { name: "Murad", salary: 400 },
// ];

// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (isNaN(arr[i].salary)) {
//     console.log("reqem deyil");
//   } else {
//     result += Number(arr[i].salary);
//   }
// }

// console.log(result);

// let a = "Salam C necesen";

// for (let i = 0; i < a.length; i++) {
//   if (a[i] === "C") {
//     console.log(`burda bu ${a[i]} herf var`);
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// function a() {
//   let b = 7;
//   b = 8;
//   z(b);
// }

// function z(y) {
//   y++;
//   d(y);
// }

// function d(n) {
//     console.log(n)
// }
// a();

// function a() {
//   const z = 7;
//   function b() {
//     console.log(z);
//   }
//   b();
// }

// a();

// let a = "Salam";

// console.log(a.lastIndexOf("a"));

// ! Home work

// ! let a = [1, 2, 3, 4, 5];
// ! let b = [1, 2, 3, 4];

//! let a = [1, 5, 19, 7, 3, 20, 35];

// for (let i = 0; i < a.length; i++) {
//   if (a[i] < 20) {
//     console.log(a[i]);
//   }
// }

// let a = "Salam necesen";

// let b=a.replaceAll('e','ə')
// console.log(b)

// e leri deyisin a lara

// ! use only for !

// let result = a.find((value) => value > 18);

// console.log(result);

// let name=document.querySelector('#name')
// let pass=document.querySelector('#password')
// let btn=document.querySelector('#btn')
// let btn=document.querySelector('#btn')
// let btn=document.querySelector('#btn')
// let btn=document.querySelector('#btn')


// btn.addEventListener('click',()=>{
//     alert('salam')
// })

//   setInterval(() => {
//     red
//  }, 1000); 


// rgb(249 2 2)
// #ff8b05
// rgb(38 102 38)
// rgb(31 205 31)

// let calculator=document.querySelector(".calculator")
// let view=document.querySelector("#view")
// let btnNumbers=document.querySelectorAll('.numbers ul li button')
// let btnOperators=document.querySelectorAll('.operators ul li button')
// let result=0;
// result=''
// const nums=[]
// let count=0
// for(let i=0;i<btnNumbers.length;i++){
    
//     btnNumbers[i].addEventListener('click',function(){
//         if(this.innerHTML=='<i class="fa-solid fa-delete-left"></i>'){
//          let t=result.split('')
//          t.pop()
//          console.log();
//          view.value=t.join('')
//          result=view.value
//          return
//         }
// view.value=+this.innerText
//         result+=this.innerText
// view.value=result


//         })
// }
// let operator=[]
// for(let i=0; i<btnOperators.length;i++){
//     btnOperators[i].addEventListener('click',function(){

//         count=result
//       result=''
//           if(!count==''){
//             nums.push(count)

//           }
//          console.log(nums);
//       if(this.innerText=='='){
//         view.value=''

//         console.log(operator[0]);
// let sum=calc(nums[nums.length-2],nums[nums.length-1],operator[0])
//         view.value=sum
//         nums.push(sum)
//       }
//       operator=this.innerText


//     })
// }
// function calc(num1,num2,opr){

//     Number(num1)
//     Number(num2)

// switch (opr){
//     case "+":
//       return Number(num1)+Number(num2);
      

//        console.log(opr)

//        break;
//        case "-":
//        return num1-num2;
//         break;
//         case '*':
//           return  num1*num2;
//             break;
//             case '/':
//                 if(num1==0||num2==0){
//                    return 'O -a bolmek olmaz olmaz'

//                 }else{
//                     return num1/num2
//                 }
//                 break;
   
// }

// }
