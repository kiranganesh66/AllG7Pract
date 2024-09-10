let authorRepository = require("../repositories/in-memory/author-repository");
let AuthorService = require("../services/author-service");
var service = new AuthorService(authorRepository);

async function getAllAuthors(request, response) {
  var authors = await service.getAllAuthors();
  response.send(authors);
}
// async function getAuthors() {
//   return await service.getAllAuthors(); //auto response.send
// }

async function getAuthorById(request, response) {
  try {
    var author = await service.getAuthorById(request.params.authorId);
    response.send(author);
  } catch (err) {
    console.log("err", err);
    response.status(404).send(err.info);
  }
}

async function addNewAuthor(request, response) {
  try {
    var newAuthor = await service.addNewAuthor(request.body);
    response.send(newAuthor);
  } catch(err) {
    console.log("err", err);
    response.status(404).send(err.info);
  }
}

async function upateAuthorById(request, response) {
    try{
       let UpdateDetails =  await service.upateAuthorById(request.params.authorId, request.body);
       response.send(UpdateDetails);
    }catch(err){
        console.log("err", err);
        response.status(404).send(err.info);
    }
}


async function delteAuthor(request, response) {
    try{
        let deletedAuthor=await service.delteAuthor(request.params.authorId);
        response.send(deletedAuthor);
    }catch(err){
        console.log("err", err);
        response.status(404).send(err.info);
    }
}


async function getAllBooksbyauthor(request, response) {
  try{
      let AuythorBooks= await service.getAllBooksbyauthor(request.params.authorId);
      response.send(AuythorBooks);
  }catch(err){
      console.log("err", err);
      response.status(404).send(err.info);
  }
}

module.exports = {
  addNewAuthor,
  getAllAuthors,
  getAuthorById,
  upateAuthorById,
  delteAuthor,
  getAllBooksbyauthor,
};
