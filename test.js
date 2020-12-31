const countBulls = (num1,answer) => {
    let bulls = 0;
    for(let i = 0; i < answer.length; i++) {
        if (num1[i] === answer[i]) {
            bulls += 1;
        }
    }
    return bulls;
}
console.log(countBulls('1255', '1234'));
