// let buffer = Buffer.alloc(10)
// let buffer = Buffer.from([1,2,3,4,5,6,7,8,9,10])
let buffer = Buffer.from('shaggy')

console.log(buffer.toString())

let abc = Buffer.alloc(26)


for ( let i=0; i<26; i++)
{
    abc[i] = i+97
}

console.log(abc.toString())

//dato a dato o paquete a paquete todo se guarda en memoria