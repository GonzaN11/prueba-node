module.exports = { 
    envioTest: () => {
        return new Promise(async (resolve, reject) => {
            console.log('Test de comunicacion');
            try {
                resolve('Hay comunicacion')
            } catch (err) {
                console.log('error catch no enviado ' + err);
                reject(err)
            }
        })

    },
}