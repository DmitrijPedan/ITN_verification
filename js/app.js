cl('ITN Verification is started ...');
function cl(inp) {
    console.log(inp);
}

const getUserInput = () => {
    inp = prompt('Введите 10 значный код ИНН:', '');
    let spl = inp.split('');
    let res;
    inp == +inp && spl.length == 10 ? res = spl.map(el => +el) : alert('Неправильный ввод');
    return res;
};


const check = (inp) => {
    let x = [-1,5,7,9,4,6,10,5,7,0];
    let summ = 0;
    let res;
    for(let i = 0; i < inp.length; i++) {
        summ += inp[i]*x[i];    
    }
    ((summ % 11) % 10) == inp[9] ? res = true : res = false;
    return res;
}

const bigFunction = () => check(getUserInput()) ? alert('Good') : alert ('Bad');

bigFunction();

// c = 240;
// s = c % 10
// k = (c % 11) % 10 ;
// cl(k);

