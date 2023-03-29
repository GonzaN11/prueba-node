const router = express.Router();

router.get('/test', (req, res, next) => {
    bTest.envioTest()
        .then(data => {
            res.status(200).send({ 'status': 'Success', 'mensaje': data });
        }, err => {
            let mensaje = 'error recibido ' + err;
            res.status(500).send({ 'status': 'Error', 'mensaje': mensaje })
        })
        .catch(next)
});

module.exports = router;