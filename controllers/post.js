var posts = [{
  id: 0,
  title: "Post 1",
  body: "This is the first post"
},
{
    id: 1,
    title: "Post 2",
    body: "This is the second post"
},
{
    id: 2,
    title: "Post 3",
    body: "This is the third post"
}];



// INDEX
function indexBook(req, res) {
  res.render("posts/index", {title:"posts", posts: posts});
}

// SHOW
function showBook(req, res) {
  var post = posts[req.params.id];
  res.render("posts/show" ,{
    title: posts,
    post : post
  });

}

// CREATE
function createBook(req, res) {
  res.send("CREATE");
}

// NEW
function newBook(req, res) {
  res.send("NEW");
}

// UPDATE
function updateBook(req, res) {
  res.send("UPDATE:" + req.params.id);
}

// DELETE
function deleteBook(req, res) {
  res.send("DELETE:" + req.params.id);
}

// EDIT
function editBook(req, res) {
  res.send("EDIT:" + req.params.id);
}


module.exports = {
  index : indexBook,
  show : showBook,
  create : createBook,
  new : newBook,
  update : indexBook,
  delete : deleteBook,
  edit : editBook
};
