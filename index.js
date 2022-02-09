function check() {

    //SvN examination (main)
    var identification = document.getElementById('identification').value;
    if (identification < 1000 || identification > 9999) {
        alert('Identificationnumber to short/big!');
    } else {
        console.log("identification", identification);
    }
    var birthday = document.getElementById('birthday').value;
    if (birthday < 100000 || birthday > 999999) {
        alert('Birthday to short/big!(TT.MM.YY)');
    } else {
        console.log("birthday", birthday);
    }

    //Stringsadministration
    var input = String(identification) + String(birthday);
    var inputSplitted = [];
    inputSplitted = input.split("");

    var number1 = inputSplitted[0];
    var number2 = inputSplitted[1];
    var number3 = inputSplitted[2];
    var number4 = inputSplitted[4];
    var number5 = inputSplitted[5];
    var number6 = inputSplitted[6];
    var number7 = inputSplitted[7];
    var number8 = inputSplitted[8];
    var number9 = inputSplitted[9];

    sumNumber1 = number1 * 3;
    sumNumber2 = number2 * 7;
    sumNumber3 = number3 * 9;
    sumNumber4 = number4 * 5;
    sumNumber5 = number5 * 8;
    sumNumber6 = number6 * 4;
    sumNumber7 = number7 * 2;
    sumNumber8 = number8 * 1;
    sumNumber9 = number9 * 6;

    summe = sumNumber1 + sumNumber2 + sumNumber3 + sumNumber4 + sumNumber5 + sumNumber6 + sumNumber7 + sumNumber8 + sumNumber9;
    result = summe % 11;

    //SvN examination
    if (String(result) == String(inputSplitted[3])) {
        document.getElementById('trueOrFalse').innerHTML = ('Die SvN ist gültig!');
    } else {
        document.getElementById('trueOrFalse').innerHTML = ('Die SvN ist ungültig!');
    }
}