// function Declaration
/**
 * 
 * @param {*} radius - Jari jari lingkaran
 * @returns 
 */
function calcCircle(radius) {
    const PHI = 3.14;
    const area = PHI * radius * radius;

    return area;
}

console.log(calcCircle(7));
console.log(calcCircle(14));

// function Expression
/**
 * 
 * @param {*} radius - Jari jari lingkaran
 * @returns 
 */
const anothercalcCircle = function (radius) {
    const PHI = 3.14;
    const area = PHI * radius * radius;

    return area;
}

console.log(anothercalcCircle(7));
console.log(anothercalcCircle(14));

// arrow function
/**
 * 
 * @param {*} side - Sisi kubus
 * @returns 
 */
const calcCube = (side) => side * side * side;

console.log(calcCube(5));