module.exports = { 
    envioTest: () => {
        return new Promise(async (resolve, reject) => {            
            try {
                console.log(`TEST DE COMUNICACION`)
                let sql = `SELECT NOM FROM APAREMP WHERE ZON = ${config.ZON}`
                console.log(sql)
                await knex.raw(sql)
                .then((resp) => {
                    if(resp.length > 0){
                        console.log(`Hay comunicacion con la empresa: ${resp[0].NOM}`)
                        resolve(`Hay comunicacion con la empresa: ${resp[0].NOM}`)
                    }  else {
                        console.log(`Hay comunicacion pero no hay empresa`)
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