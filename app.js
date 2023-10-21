// ques1
// function day(){
//     let date = new Date()
//     let v=date.toGMTString()
//     document.write(v)
// }

// day()

// ques2
// let first=prompt('enter first name')
// let last =prompt('enter last name')
// function greet(first,last){
//     document.write(`Good Morning ${first} ${last}`)
// }
// greet(first,last)


// ques3
// function add(){
//     let user1=+prompt("enter 1st number:")
//     let user2=+prompt("enter 2nd number:")
//     document.write("the result is: " ,user1+user2)
// }

// add()


// ques4
// let user1=+prompt('enter 1st number: ')
// let user2=+prompt('enter 2nd number: ')
// let user3=+prompt('press 1 for addition'+'\n'+'press 2 for subtraction'+'\n'+'press 3 for multiplication'+'\n'+'press 4 for division'+'\n')


// function cal(num1 , num2 , choice){

//         if(choice == 1 ){
//             document.write(user1+user2)
//         }
//         else if(choice==2){
//             document.write(num1-num2)
//         }
//         else if(choice==3){
//             document.write(num1*num2)
//         }
//         else if(choice==4){
//             document.write(num1/num2)
//         }



// }

// cal(user1,user2,user3)


// ques5
// function squae(){
//         let num=+prompt("Enter a number")
//         document.write(`the square of ${num} is ${Math.pow(num,2)}`)
// }
// squae()

// ques6
// let num =+prompt('enter the number ')
// function factorial(num){
//     let b=1
//     for (let i=num; 0<i ; i-- ){
//         b*=i
//     }
//     document.write(`the factorial of ${num} is ${b}`)
   
// }

// factorial(num)

// ques 7
// var first=+prompt('Enter the first number')
// var second=+prompt('Enter the second number')
// function rangee(num1,num2){
//     for(var i=num1 ;i<=num2 ;i++){
//         document.write(i + '<br>')
//     }
// }
// rangee(first,second)

// ques8
// let base=+prompt('Enter base')
// let per =+prompt('Enetr perpendicular')
// function hypotnuse(base , per ){
//     let a = base**2
//     let b= per**2
//     function cal_square(a,b){
//         let hypo= a+b
//         document.write(`the hypotnuse is ${hypo**0.5}`)

//     }
//     cal_square(a,b)

// }
// hypotnuse(base,per)

// ques 9
// function cal (width , height ){
//     document.write(width*height)
// }
// var width=4
// var height = 6

// by variable
// cal(5,7)

// by value
// cal (width , height)

// ques10
let st = prompt('Enter a word');
let a = st.split('');
let b = st.split('').reverse();
let isPalindrome = true;

for (var i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
        continue; 
    } else {
        isPalindrome = false;
        console.log('Not a palindrome');
        break
    }
}

if (isPalindrome) {
    console.log('Palindrome');
} 

// ques11
// var string=prompt("Enter String")
// function str(string){
//     var a= string.split(" ")
//     var result=""
//     for (var i=0;i<a.length;i++){
//         var b= a[i][0].toUpperCase()+a[i].slice(1)
//         result +=b +" "
        

        
//     }
//     console.log(result);
    

// }

// str(string)


// ques 12
// let string = prompt ('enter th senetence')
// function longest(string){
//     let l=''
//     let a=string.split(" ")
//     for (var i=0;i<a.length;i++){
//         let b = a[i].length
//         if (b>l.length){
//             l=a[i]
//         }
//     }
//     console.log(l);
// }


// longest(string)


// ques13
// let string = prompt("enter the word")
// let word = prompt ('enter a letter you want to count')
// function letter(str,letter){
//     let i=0
//     for (var j=0;j<str.length;j++){
//         if (str[j]===word){
//             i++
//         }
//     }
//     console.log(i);
// }

// letter(string,word)

// ques 14
// function calcCircumference(r){
//     document.write(`the circumference is ${r*2*3.142} <br>`)
// }
// calcCircumference(prompt("enter the radius of circle"))

// function calcArea(r){
//     document.write(`the area is ${Math.pow(r,2)*3.142}`)
// }
// calcArea(prompt("enter the radius of circle"))