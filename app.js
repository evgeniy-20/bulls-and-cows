const answer = '1234';
const buttonClick = () => {
    if(input.value === answer) {
        alert("Ура, ты победил!")
    } else if(input.value.length != 4) {
        alert('Error')
    } else {
        addStep();
    }
}

const addStep = () => {
    let input = document.getElementById('input');
    let result = document.getElementById('result');
    let liElement = document.createElement('li');
    result.appendChild(liElement);
    let text = document.createTextNode(input.value);
    liElement.appendChild(text);
    let spanLi = document.createElement('span');
    liElement.appendChild(spanLi);
    let str = " " + countBulls(input.value, answer) + " биков " + countCows(input.value,answer) + " коров";
    let text1 = document.createTextNode(str);
    spanLi.appendChild(text1);
}
const countBulls = (num1,answer) => {
    let bulls = 0;
    for(let i = 0; i < answer.length; i++) {
        if (num1[i] === answer[i]) {
            bulls += 1;
        }
    }
    return bulls;
}
const countCows = (num2,answer) => {
    let cows = 0;
    for(let i = 0; i < answer.length; i++) {
        if (answer[i].includes(num2)) {
            cows += 1;
        }
    }
    return cows;
}