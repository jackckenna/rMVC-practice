var express = require('express');

var router = express.Router();

var postsController = require('../controllers/post');

// add routes here

router.route('/')
  .get(postsController.index)
  .post(postsController.create);


  // router.get('/', postsController.index)  ^above
  // router.get('/', function(req, res) {
  //   res.send("<h1>Homepage</h1>")
  // });

router.route('/new')
  .get(postsController.new)

router.route('/:id')
  .get(postsController.show)
  .get(postsController.update)
  .delete(postsController.delete)


router.route('/:id/edit')
  .get(postsController.edit);


module.exports = router;
