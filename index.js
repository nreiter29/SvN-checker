function check() {
    var identification = document.getElementById('identification').value;
    if (identification < 1000 || identification > 9999) {
        alert('Persönliche Kennnummer zu klein/groß!');
    } else {
        console.log("identification", identification);
    }
    var birthday = document.getElementById('birthday').value;
    if (birthday < 100000 || birthday > 999999) {
        alert('Geburstag zu klein/groß!');
    } else {
        console.log("birthday", birthday);
    }
    var pru = String(identification) + String(birthday);
    var array = [];
    array = pru.split("");
    console.log(array)
    var number1 = array[0];
    var number2 = array[1];
    var number3 = array[2];
    var number4 = array[4];
    var number5 = array[5];
    var number6 = array[6];
    var number7 = array[7];
    var number8 = array[8];
    var number9 = array[9];
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

    console.log(array[3])
    console.log("result", result)
    if (String(result) == String(array[3])) {
        document.getElementById('trueOrFalse').innerHTML = ('Die SvN ist gültig!');
    } else {
        document.getElementById('trueOrFalse').innerHTML = ('Die SvN ist ungültig!');
    }
}