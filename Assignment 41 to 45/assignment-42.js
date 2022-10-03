// Question No-42 //

var QuestionNo = "Question No-42)"

var arrmagic = ["raza", "ahmed", "kamran"]

function magic(QuestionNo, arrmagic) {

    for (let i = 0; i < arrmagic.length; i++) {
        const element = arrmagic[i];

        document.write(QuestionNo, ` array of magician’s List ${element} <br />`)
    }
}

function make_great(QuestionNo, arrmagic) {

    for (let i = 0; i < arrmagic.length; i++) {
        const element = arrmagic[i];

        document.write(QuestionNo, ` array of magician’s List ${element} <br />`)
    }
}


magic(QuestionNo, arrmagic)
document.writeln(`<br />`);
make_great(QuestionNo, arrmagic.reverse())

