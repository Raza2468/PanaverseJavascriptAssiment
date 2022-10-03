//   Question No-18 //

var QuestionNo = "Question No-18)"

var QuestionNoA = "Question No-18 A=>)"
var QuestionNoB = "Question No-18 B=>) "
var QuestionNoC = "Question No-18 C=>)"
var QuestionNoD = "Question No-18 D=>)"
var QuestionNoE = "Question No-18 E=>)"
var QuestionNoF = "Question No-18 F=>)"
var QuestionNoG = "Question No-18 G=>)"
var QuestionNoH = "Question No-18 H=>)"
var QuestionNoI = "Question No-18 I=>)"
var QuestionNoJ = "Question No-18 J=>)"
var QuestionNoK = "Question No-18 K=>)"

const locations = ["Saudi Arab ", "Turki ", "Istambul ", "Pakistan ", "Lahore "]

document.write(QuestionNoA, locations, "original order", "<br />");
document.write(QuestionNoB, locations.sort(), "Print alphabetical order", "<br />");

document.write(QuestionNoC, locations, "again original order print", "<br />");
document.write(QuestionNoD, locations.sort().reverse(), "Reverse alphabetical order print", "<br />");

document.write(QuestionNoE, locations, "again original order print", "<br />");
document.write(QuestionNoF, locations.reverse(), "reverse order print ", "<br />");

document.write(QuestionNoG, locations, " Alphabetical order print", "<br />");
document.write(QuestionNoH, locations.reverse(), "reverse order print ", "<br />");

document.write(QuestionNoI, locations, "again original print", "<br />");
document.write(QuestionNoJ, locations.sort(), "reverse order print ", "<br />");

document.write(QuestionNoK, locations.reverse().sort(), "Reverse alphabetical order print ", "<br />");


