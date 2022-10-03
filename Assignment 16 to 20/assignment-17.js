// Question No-17 //

var QuestionNo = "Question No-17)"

var QuestionNoA = "Question No-17 A=>)"
var QuestionNoB = "Question No-17 B=>) "
var QuestionNoC = "Question No-17 C=>)"
var QuestionNoD = "Question No-17 D=>)"

var arr = ["Ahmed", "Faiz", "Raza"]

for (let i = 0; i < arr.length; i++) {
    const element = i + " " + arr[i] + " please come to dinner only two people";
    console.log(QuestionNoA, element);
}

var arrpop = arr.pop()
for (let i = 0; i < arrpop.length; i++) {
    const element = i + " " + "Sorry " + arrpop + " don't come to dinner";
    console.log(QuestionNoB, element);
    break
}

for (let i = 0; i < arr.length; i++) {
    const element = i + " " + "reminder " + arr[i] + " please come to dinner only two people";
    console.log(QuestionNoC, element);
}

var arr = []

const element = arr + "[]" + " Array is Empty";
console.log(QuestionNoD, element);


