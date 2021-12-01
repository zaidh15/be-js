const {index, store} = require("./AnimalController.js");

const main = () => {
    index();
    store("Elephant");
}

main();