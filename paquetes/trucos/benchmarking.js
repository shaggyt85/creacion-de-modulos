let suma = 0;
console.time('bucle');

for (let i = 0; i < 1000000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

let resta = 0;
console.time('bucle');

for (let j = 0; j < 1000000000; j++) {
    resta -= 1;
}

function async () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
            resolve();
        })
    })
}

console.time('asincrono');
async()
.then(() => {
    console.timeEnd('asincrono');
})

console.timeEnd('bucle');

//calculo del tiempo que tarda en ejecutarse