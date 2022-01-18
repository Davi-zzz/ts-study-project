import * as express  from 'express';
import group  from '../enums/enumGroup';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        title: "all right here",
        version: "0.0.1"
    })
});

// router.get('/test', (req, res) => {
//     res.status(200).send({ "body":  group[product1.group]});
// });

export default router;