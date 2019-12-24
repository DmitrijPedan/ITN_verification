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

cl(getUserInput());

