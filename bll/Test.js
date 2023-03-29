module.exports = { 
    envioTest: () => {
        return new Promise(async (resolve, reject) => {
            console.log('Test de comunicacion');
            try {
                await knex.raw(`SELECT NOM FROM APAREMP WHERE ZON = 1`)
                .then((resp) => {
                    if(resp.length > 0){                        
                        resolve(`Hay comunicacion con la empresa: ${resp[0].NOM}`)
                    }  else {                        
                        resolve(`Hay comunicacion pero no hay empresa`)
                    }
                })
                .catch(err => {
                    console.log(`HUBO UN ERROR AL BUSCAR EMPRESA EN LA APAREMP `, err)
                    reject(err);
                })
            } catch (err) {
                console.log('error catch no enviado ' + err);
                reject(err)
            }
        })

    },
}