const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const router = express.Router();

router.use(bodyParser.json());

router.get('/', controller.get);
router.post('/', controller.post);
router.get('/risk', controller.getByRisk);

module.exports = router;
