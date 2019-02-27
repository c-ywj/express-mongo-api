var express = require("express"); 
var router = express.Router(); 

router.get("/", function(req, res, next) {
    res.render("index", 
        {
        title: "Lab 4"
        }
    );
}); 

 

module.exports = router;