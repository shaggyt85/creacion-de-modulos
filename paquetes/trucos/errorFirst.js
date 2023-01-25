function async (callback) {
    setTimeout(() => {
        try{
            let a = 3 + 6;
            callback(null, a)
            console.log('Termina el proceso asincrono');
        }catch(e){
            callback(e, null);
            console.error('Error en mi función asincrona');
        }
    }, 1000)
}

async(function(err, data){
    if(err){
        console.error('Tenemos un error');
        console.error(err);
        return false;
        // throw err;
    }
    console.log('Todo ha ido bien, mi data es', data);
})