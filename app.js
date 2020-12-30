const answer = '1234';
if(number === answer) {
	console.log("Ура, ты победил!")
} else if(number != answer){
	console.log(buttonClick());
} else {
	console.log(addStep());
}
const buttonClick = () => {
    if(input.value.length != 4) {
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
}