
//  Question No-32 //

var QuestionNo = "Question No-32)"

var current_users = ['raza', 'faiz', 'zubair', 'RIZWAN', 'Ahmed']
var new_users = ['saleem', 'Wajid', 'Pak', 'RIZWAN', 'Ibrahim']

const findDuplicates = (current_users, new_users) => {
    
    let sorted_current = current_users.slice().sort(); // You can define the comparing function here. 
    let sorted_new = new_users.slice().sort(); // You can define the comparing function here. 

    let results = [];
    for (let i = 0; i < sorted_current.length - 1; i++) {
        // console.log(sorted_current[i]);
        if (sorted_new[i + 1] == sorted_current[i]) {
            // console.log(sorted_new[i + 1] );
            results.push(sorted_current[i]);
        }
    }
    return results;
}


var a = findDuplicates(current_users, new_users)
document.write(QuestionNo, ` ${a} person will need to enter a new username.<br />`);


for (let i = 0; i < current_users.length; i++) {
    const element = current_users[i];

    if (element === element.toUpperCase()) {
        document.write(QuestionNo, ` ${element} should not be accepted <br />`);
    } else {
        document.write(QuestionNo, ` ${element} has been used <br />`);

    }
}