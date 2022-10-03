// Question No-40 //

var QuestionNo = "Question No-40)"

function make_album(artist, title) {


    var album_dict = {
        "artist": artist,
        "title": title,
    }

    return (
        album_dict
    )
}

var printDoc0 = make_album(" Atif Aslam ", " It's an amazing Singer ")
document.writeln(QuestionNo, JSON.stringify(printDoc0), "<br />", "<br />")

var printDoc1 = make_album(" Art ", " It's a Singer ")
document.writeln(QuestionNo, JSON.stringify(printDoc1), "<br />", "<br />")


document.writeln(`<b>Tracks</b>`);
document.writeln(`<br />`);



function make_album(artist, title, tracks = 0) {


    var album_dict = {
        "artist": artist,
        "title": title,
    }

    if (tracks) {

        album_dict['tracks'] = tracks
   
    }
    return (
   
        album_dict
    )
}

var printDoc0 = make_album(" Atif Aslam ", " It's an amazing Singer ")
document.writeln(QuestionNo, JSON.stringify(printDoc0), "<br />", "<br />")

var printDoc1 = make_album(" Art ", " It's a Singer ", "07")
document.writeln(QuestionNo, JSON.stringify(printDoc1), "<br />", "<br />")

