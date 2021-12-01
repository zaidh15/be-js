const animals = require ("./data.js");

const index = () => {
    for (const animal of animals){
        console.log(animal);
    }
}

const store = (name) => {
    animals.push(name);
    index();
}

module.exports = {index, store};