// Question No-37 //

var QuestionNo = "Question No-37)"
var size = "Large"
var message = "Color blue"

function make_shirt(QuestionNo, size = 'large', message = 'I love JavaScript!') {

    document.write(QuestionNo)
    document.write(`<br /> i'm going to make a ${size} t-shirt size `)
    document.write(`<br />  ${message} <br />`)

}

make_shirt(QuestionNo)
make_shirt(QuestionNo, size = 'medium')
make_shirt(QuestionNo, 'small', 'Programmers are JavaScript.')



