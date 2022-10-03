//    Question No-44 //

var QuestionNo = "Question No-44)"

var arrSanwish = ["Chicken", "Nutella", "Egg", 'vegitable ']
var arrSanwish2 = ["Roast ", "Beef "]

function Sanwish(QuestionNo, ...arrSanwish) {

    for (let i = 0; i < arrSanwish.length; i++) {
        const element = arrSanwish[i];

        document.write(QuestionNo, ` Your ${element} sandwish has beeen ready <br />`)
    }
}


Sanwish(QuestionNo, arrSanwish)
document.writeln(`<br />`);
Sanwish(QuestionNo, arrSanwish2)