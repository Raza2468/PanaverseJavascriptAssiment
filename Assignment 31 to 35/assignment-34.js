//  Question No-34 //

var QuestionNo = "Question No-34)"

var favorite_pizzas = ['California Pizza.', 'Chicago Pizza', 'Neapolitan Pizza']

for (let i = 0; i < favorite_pizzas.length; i++) {
    const element = favorite_pizzas[i];

    console.log(QuestionNo, element, "\n");
}

for (let i = 0; i < favorite_pizzas.length; i++) {
    const element = i + " " + `I really  ${favorite_pizzas[i]} love pizza!`;
    console.log(QuestionNo, element);

}