const sides = document.querySelectorAll('.side-input');
const calculateBtn = document.querySelector('#calculate-area-btn');
const outputEl = document.querySelector('.output');

function calculateAreaOfTriangle(a, b) {
    const areaTriangle =1/2*a*b;
    return areaTriangle;
} 

function calculateArea() {
    const areaTriangle = calculateAreaOfTriangle(Number(sides[0].value), Number(sides[1].value));
    outputEl.innerText = "The length of hypotenuse is " + areaTriangle;
}

calculateBtn.addEventListener('click', calculateArea);