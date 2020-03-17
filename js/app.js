const getUserInput = () => {
    let input = document.getElementById('inn-input').value;
    input == +input && input.split('').length == 10 ? input = input.split('').map(el => +el) : alert('Неправильный ввод');
    return input;
};

const getITNVerification = (inp) => {
    const mask = [-1,5,7,9,4,6,10,5,7,0];
    const summ = (inp.map((el, i) => el = el*mask[i])).reduce((acc = 0, el) => acc + el);
    return ((summ % 11) % 10) == inp[9] ? true : false;
}

const getUserGender = (inp) => inp[inp.length - 2] % 2 == 0 ? 'Женский' : 'Мужской';

const getUserData = (inp) => {
    const months = ['января','февраля','марта','апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const days = +inp.splice(0,5).join('') - 25568;
    const date = new Date(days * 86400000);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года`;
}

const createHTMLNode = (tag, attrs, inner) => {
    const element = document.createElement(tag);
    attrs.map(el => {element.setAttribute(el.name, el.value.join(' '))});
    inner ? (Array.isArray(inner) ? inner.map(el => element.appendChild(el)) : element.innerHTML=inner) : null;
    return element;
};

 const mainFunction = () => {
    const input = getUserInput()
    if (getITNVerification(input)) {
        const message = createHTMLNode('div', [{name: 'class', value: ['alert', 'alert-success']}, {name: 'role', value: ['alert']}], `Код ${input.join('')} действителен. <br>Дата рождения: ${getUserData(input)}. <br>Пол: ${getUserGender(input)}`);
        document.getElementById('app').prepend(message);
    } else {
        const message = createHTMLNode('div', [{name: 'class', value: ['alert', 'alert-danger']}, {name: 'role', value: ['alert']}], `Код ${input.join('')} не действителен.`);
        document.getElementById('app').prepend(message);
    }

}

document.getElementById('checkBtn').onclick = mainFunction;

