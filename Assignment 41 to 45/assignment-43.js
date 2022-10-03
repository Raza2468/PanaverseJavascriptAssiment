//    Question No-43 //

        var QuestionNo = "Question No-43)"

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

                document.write(QuestionNo, ` the great magician’s List ${element} <br />`)
            }
        }

        function orignal(QuestionNo, arrmagic) {

            for (let i = 0; i < arrmagic.length; i++) {
                const element = arrmagic[i];

                document.write(QuestionNo, ` the Orignal magician’s List ${element} <br />`)
            }
        }


        magic(QuestionNo, arrmagic)
        document.writeln(`<br />`);
        make_great(QuestionNo, arrmagic.reverse())
        document.writeln(`<br />`);
        orignal(QuestionNo, arrmagic)
