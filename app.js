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
    let text1 = document.createTextNode(' 0 биков 0 коров');
    spanLi.appendChild(text1);
}