//Dependencies
var express = require('express');
var router = express.Router();

//Routes

//homepage
router.get('/downloadproto', function(req, res){
	res.download('./public/downloads/graderv2prototype.zip');
});
//return router
module.exports = router;