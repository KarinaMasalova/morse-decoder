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

    let decoded = '';

    //divide into parts of 10 characters
    for (let i = 0; i < expr.length; i = i + 10) {
        if(expr[i] === '*') {
            decoded += ' ';
            continue; //interrupt current iteration -> next iteration
        }

        let character = '';

        //divide into parts of 2 characters
        for (let j = i; j < i + 10; j = j + 2) {       
            switch (expr.slice(j, j + 2)) {
                case '10':
                    character += '.';
                    break;
                case '11':
                    character += '-';
                    break;
            }
        }

        decoded += MORSE_TABLE[character];
    }
    
    return decoded;
}

module.exports = {
    decode
}