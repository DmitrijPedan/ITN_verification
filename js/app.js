const getUserInput = () => {
    let input = document.getElementById('inn-input').value;
    input == +input && input.split('').length == 10 ? input = input.split('').map(el => +el) : alert('Неправильный ввод');
    return input;
};

const getITNVerification = (inp) => {
    let mask = [-1,5,7,9,4,6,10,5,7,0], result;
    let summ = (inp.map((el, i) => el = el*mask[i])).reduce((acc=0, el) => acc+el);
    ((summ % 11) % 10) == inp[9] ? result = true : result = false;
    return result;
}

const getUserGender = (inp) => {
    let result;
    inp[inp.length - 2] % 2 == 0 ? result = 'Женский' : result = 'Мужской';
    return result;
}

const getUserData = (inp) => {
    const months = ['января','февраля','марта','апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let days = +inp.splice(0,5).join('') - 25568;
    let date = new Date(days * 86400000);
    let res = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года`;
    return res;
}

const createHTMLNode = (tag, attrs, inner) => {
    const element = document.createElement(tag);
    attrs.map(attr => {element.setAttribute(attr.name, attr.value.join(' '))});
    inner
        ?
            Array.isArray(inner) ? inner.map(el => element.appendChild(el)):
                element.innerHTML=inner
                :null;
    return element;
}

 const mainFunction = () => {
    let input = getUserInput()
    if (getITNVerification(input)) {
        let message = createHTMLNode('div', [{name: 'class', value: ['alert', 'alert-success']}, {name: 'role', value: ['alert']}], `Код ${input.join('')} действителен. <br>Дата рождения: ${getUserData(input)}. <br>Пол: ${getUserGender(input)}`);
        document.getElementById('app').prepend(message);
    } else {
        let message = createHTMLNode('div', [{name: 'class', value: ['alert', 'alert-danger']}, {name: 'role', value: ['alert']}], `Код ${input.join('')} не действителен.`);
        document.getElementById('app').prepend(message);
    }

}

document.getElementById('checkBtn').onclick =  mainFunction;

