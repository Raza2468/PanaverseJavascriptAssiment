//   Question No - 33 //

var QuestionNo = "Question No-33)"

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < list.length; i++) {

    const element = list[i];

    if (element === 1) {

        document.writeln(QuestionNo, " 1st" + "<br/>")
    } else if (element === 2) {

        document.writeln(QuestionNo, " 2nd" + "<br/>")
    } else if (element === 3) {

        document.writeln(QuestionNo, " 3rd" + "<br/>")
    }
    else {
        document.writeln(QuestionNo, ` ${element}th` + "<br/>")
    }
}
