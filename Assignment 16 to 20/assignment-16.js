//  Question No-16 //

var QuestionNo = "Question No-16)"
var QuestionNoA = "Question No-16 A=>)"
var QuestionNoB = "Question No-16 B=>) "
var QuestionNoC = "Question No-16 C=>)"
var QuestionNoD = "Question No-16 D=>)"

var arr = ["Ahmed", "Faiz", "Raza"]

for (let i = 0; i < arr.length; i++) {
    
    const element = i + " " + arr[i] + " found a bigger dinner table.";
    console.log(QuestionNoA, element);
}

var newArr = "Tahseen"

var arr1 = [newArr, ...arr]

for (let i = 0; i < arr1.length; i++) {

    const element = i + " " + arr1[i] + " is new guest";
    console.log(QuestionNoB, element);

}

for (let i = 0; i < arr.length; i++) {
    
    var a = arr[1] = "Noor Hussain"
    const element = i + " " + `hy guys my name is ${arr[i]} i'm new here adjust me in middle`;
    console.log(QuestionNoC, element);
}

const fruits = ["Ahmed", "Faiz", "Raza"]
const allfruits = fruits.concat('Noor Hussain', "Taseen", "zeeshan")

for (let i = 0; i < allfruits.length; i++) {

    const element = i + " " + allfruits[i] + " We arranged big table for dinner please join us on given time";
    console.log(QuestionNoD, element);
}


