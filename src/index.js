const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
    let arr = [];
    let newArr = [];
    let str = '';
    let count = 10;
 for (let i = 0; i < expr.length; i++){
    arr.push(expr.slice(i, count));
    i = count-1;
    count = count + 10;
 }
 for (elem of arr){
     for (let i = 0; i < elem.length; i = i + 2){
         if (elem[i] === '1' && elem[i+1] === '0') str += '.';
         if (elem[i] === '1' && elem[i+1] === '1') str += '-';
         if (elem === "**********") str = ' ';
     }
     newArr.push(str);
     str = '';
 }
 for (elem of newArr){
    if (elem === ' ') str += ' ';
    else str += MORSE_TABLE[elem];    
 }
 return str;
}

module.exports = {
    decode
}