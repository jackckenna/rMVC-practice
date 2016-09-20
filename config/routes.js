var express = require('express');
var router = express.Router();

var postsController = require('../controllers/posts')

// add routes here 
//ROUTES GO BETWEEN RETQUIREMENTS AND THE LISTEN (HERE)


//different syntax example using the "/" route 
router.route("/")
	.get(postsController.index)
	.post(postsController.create)

router.route("/new")
	.get(postsController.new)

router.route("/:id")
	.get(postsController.show)
	.put(postsController.update)
	.delete(postsController.delete)

router.route('/:id/edit')
	.get(postsController.edit);


module.exports = router;

//----->Differet way of routing (longer!)<------

// //Index || Homepage
// router.get('/', postsController.index);

// //Show 

// router.get('/:id', postsController.show);

// //Create

// router.post('/', postsController.create);

// //New

// router.get('/new', postsController.new);

// //Update 

// router.put('/:id', postsController.update);

// //Delete

// router.delete('/:id', postsController.delete);

// //Edit 



