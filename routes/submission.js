const express = require('express');
const controllers = require("../controllers/submissionControllers.js")
const cookieParser =  require('cookie-parser');
require("dotenv").config();

const router = express.Router();

router.use(express.static('public'));
router.use(express.json()); 
router.use(cookieParser());

//upload submission
router.get('/upload/:form_id', controllers.getUpload);
router.post('/upload/:form_id', controllers.addSubmission);

//edit submission
router.get('/editSubmission/:id', controllers.getEdit);
router.post('/editSubmission/:id', controllers.editSubmission);

//read my submission
router.get('/listMySubmission', controllers.getListMySubmission);
router.get('/listSubmission', controllers.listSubmission);

//delete submission
router.delete('/deleteSubmission/:id', controllers.deleteSubmission);

//download file submission
router.get('/downloadFileSubmission/:id', controllers.downloadSubmission);

//lihat file submission
router.get('/viewFileSubmisison/:id', controllers.lihatFileSubmission);

module.exports = router;
