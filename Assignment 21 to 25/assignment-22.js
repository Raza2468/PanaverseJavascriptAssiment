// Question No-22 //

var QuestionNo = "Question No-22)"


const arrNames = ["Ahmed", "Faiz", "Raza"]


for (let i = 0; i < arrNames.length; i++) {
    const element = arrNames[i];
    // console.log(element);
    if (i == 3) {

        document.write(QuestionNo, ` ${arrNames[i]} error not correct` + "<br/>");

    } else {
        document.write(QuestionNo, " index number not define error 404");

        break

    }

}
