// const persiapan = () => console.log("Persiapan bahan bahan..."); 

// const rebusAir = () => console.log("Merebus Air...");

// const masak = () => {
//     console.log("Masak...");
//     console.log("Selesai...");
// }

// const masakMie = () => {
//     setTimeout(() => {
//         persiapan();
//         setTimeout(() => {
//             rebusAir();
            
//             setTimeout(() => {
//                 masak();
//             }, 5000);
//         }, 7000);
//     }, 3000);
// }

// masakMie();

// promise

const persiapan = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Persiapan...");            
        }, 3000);
    })
}

const rebusAir = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Merebus air...");
        }, 7000);
    })
}

const masak = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Masak, Selesai");
        }, 7000);
    })
}

// const main = () => {
//     persiapan()
//     .then((result) =>{
//         console.log(result);
//         return rebusAir();
//     })
//     .then((result) =>{
//         console.log(result);
//         return masak();
//     }) 
//     .then((result) =>{
//         console.log(result);
//     })
//     .catch((result) => {
//         console.log(result);
//     })
// }

const main = async () => {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
}

main();

