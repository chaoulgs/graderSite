//Dependencies
var express = require('express');
var router = express.Router();

//Routes

//homepage
router.get('/download', function(req, res){
	res.download('./public/downloads/AmazingTestGrader103.zip');
});
//return router
module.exports = router;