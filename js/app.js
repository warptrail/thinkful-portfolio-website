function hello(something) {
    console.log("hello " + something);
}

hello("world");

const percentForm = document.getElementById('percentage-form');

function isPercentOf(percentOf, number) {
    let percent = parseFloat(((percentOf / number) * 100).toFixed(2));
    return percent;
}

function displayPercentageOf(e) {
    e.preventDefault();
    let numberA = document.getElementById('input-number-a').value;
    let numberB = document.getElementById('input-number-b').value;
    let percentOfDemo = document.getElementById('output');
    let percent = isPercentOf(numberA, numberB);
    percentOfDemo.innerHTML += `
        <p>${numberA} is ${percent}% of ${numberB}
    `;
    percentForm.reset();
    document.getElementById('input-number-a').focus();
}
percentForm.onsubmit = displayPercentageOf;

console.log(isPercentOf(740, 851));