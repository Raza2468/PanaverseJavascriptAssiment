// Question No - 3 //

var QuestionNo = "Question No-3)"
var personName = "muhAmmad faiZ e raZa"

var UperCase = personName.toUpperCase()
var LowerCase = personName.toLowerCase()
var TitleCase = personName.toLowerCase().split(' ').map((v, i) => {

    return (v.charAt(0).toUpperCase() + v.slice(1));

}).join(' ')

var QuestionPrint = QuestionNo + " " + UperCase + " " + LowerCase + " " + TitleCase
document.write(QuestionPrint)
