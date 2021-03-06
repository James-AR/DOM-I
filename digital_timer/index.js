const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

let secondTensCounter = 0;
let secondOnesCounter = 0;
let msHundredsCounter = 0;
let msTensCounter = 0;

msTens.innerHTML = '0';
msHundreds.innerHTML = '0';
secondOnes.innerHTML = '0';
secondTens.innerHTML = '0';

let timer = setInterval(function () {
    if (msTens.innerHTML !== '9') {
        msTensCounter++;
        msTens.innerHTML = msTensCounter.toString();
    } else {
        msTensCounter = 0;
        msTens.innerHTML = '0';
        if (msHundreds.innerHTML !== '9') {
            msHundredsCounter++;
            msHundreds.innerHTML = msHundredsCounter.toString();
        } else {
            msHundredsCounter = 0;
            msHundreds.innerHTML = '0';
            if (secondOnes.innerHTML !== '9') {
                secondOnesCounter++;
                secondOnes.innerHTML = secondOnesCounter.toString();
            } else {
                secondOnesCounter = 0;
                secondOnes.innerHTML = '0';
                secondTens.innerHTML = '1';
                clearInterval(timer);
                msTens.className = 'redDigit';
                msHundreds.className = 'redDigit';
                secondOnes.className = 'redDigit';
                secondTens.className = 'redDigit';
                document.getElementById('colon').className = 'redDigit';
            }
        }
    }
}, 10)
