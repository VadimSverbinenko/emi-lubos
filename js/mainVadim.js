var forma = document.forms["vadim"];

forma.addEventListener("submit", function (event) {
    event.preventDefault();

    var pilaKaina = 10;
    var ledLemposKaina = 5;
    var kornizuInstaliacija = 25;
    var kvadratura = document.getElementById("height").value;

    var selector = document.getElementById("id_of_select");//Kambariu skaicius
    var selector1 = document.getElementById("id_of_select1");//Papildomu kampu
    var selector2 = document.getElementById("id_of_select2");//Led ldempos
    var selector3 = document.getElementById("id_of_select3");//Kornizai

    var suma = document.getElementById("sum");




    var value = selector[selector.selectedIndex].value;
    value = value / 1;

    var value1 = selector1[selector1.selectedIndex].value;
    value1 = value1 / 1;

    var value2 = selector2[selector2.selectedIndex].value;
    value2 = value2 / 1;

    var value3 = selector3[selector3.selectedIndex].value;
    value3 = value3 / 1;



    if (value > 4) {
        pilaKaina = 12;
    }
    if (value2 > 4) {
        ledLemposKaina = 4;
    }
    if (value3 > 4) {
        kornizuInstaliacija = 20;
    }


    pilaKaina = pilaKaina / 1;
    var sumLedLemposKaina = ledLemposKaina * value2;

    var sumKornizuInstaliacija = kornizuInstaliacija * value3;

    var sumLempIrKor = sumLedLemposKaina + sumKornizuInstaliacija;
    sumLempIrKor = sumLempIrKor / 1;


    function sum() {
        sum = (suma + sumLempIrKor);
        document.getElementById("sum").value = " Visa kaina: " + sum + " Eu";

    }

    function sumMarkup() {
        suma = ((kvadratura) * pilaKaina) + markupp;
    }
            var discount = 0.1;
            var markup = 0.1;
            var markupHigher = 0.2;



    if ((value == 11) || (value1 == 11) || (value2 == 11) || (value3 == 11)) {
        alert("Dėl didesnės nuolaidos kreipkitės tiesiai į vadovą!");
    } else if (value == 0 || kvadratura == 0) {
        alert("Neteisingai įvesti duomenys!")
    } else {

        if (kvadratura >= 150) {
            

            if ((value1 > 0 && value1 <= 5)) {
             markupp = (kvadratura) * pilaKaina * markup;
                sumMarkup();
                sum();


            } else if ((value1 > 5 && value1 <= 11)) {
                markupp = (kvadratura) * pilaKaina * markupHigher;
                sumMarkup();
                sum();


            } else {
                disc = (kvadratura) * pilaKaina * discount;
                suma = ((kvadratura) * pilaKaina) - disc;
                sum();


            }
        } else if (kvadratura < 150) {

            var markup = 0.1;
            var markupHigher = 0.2;

            if ((value1 > 0 && value1 <= 5)) {
               markupp = (kvadratura) * pilaKaina * markup;
                sumMarkup();
                sum();


            } else if ((value1 > 5 && value1 <= 11)) {
                 markupp = (kvadratura) * pilaKaina * markupHigher;
                sumMarkup();
                sum();


            } else {
                suma = (kvadratura) * pilaKaina;
                sum();


            }
        } else {
            suma = (kvadratura) * pilaKaina;
            sum = (suma + sumLempIrKor);
            document.getElementById("sum").value = " Visa kaina: " + sum + " Eu";

        }

    }

});

function remove() {
    suma.reload("sum");

}

function myFunction() {
    document.getElementById("super").reset();
    remove();


}
