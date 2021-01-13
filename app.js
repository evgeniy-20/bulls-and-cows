const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
const getRandomAnswer = () => {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(i);
    }
    shuffle(numbers);
    return numbers.slice(0, 4).join("");
  };
  
const answer = getRandomAnswer();
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
const countCows = (numUser,answer) => {
    let cows = 0;
    for(let i = 0; i < answer.length; i++) {
        let isBull = numUser[i] === answer[i];
        let isCow =  answer.includes(numUser[i]);
        if(!isBull && isCow) {
            cows += 1;
        }
    }
    return cows;
}
const clearFunck = () => {
    let button1 = document.getElementById('button1');
}