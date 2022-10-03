// Question No - 30 //

var QuestionNo = "Question No-30)"

var role = ['admin', 'Superviser', 'worker', 'assistain', 'watchman']

for (let i = 0; i < role.length; i++) {
    const element = role[i];

    if (element === 'admin') {

        document.writeln(QuestionNo, `\nHello ${element}, would you like to see a status report? `);
        break
    } else {

        document.writeln(QuestionNo, `Hello ${element}, thank you for logging in again! \n`);
    }

}
