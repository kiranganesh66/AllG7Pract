

class AuthorService{

    constructor(authorRepository){
        this.authorRepository = authorRepository;
    }

    getAllAuthors(){
        return this.authorRepository.getAllAuthors();
    }

    getAuthorById(id){
        return this.authorRepository.getAuthorById(id);
    }


    upateAuthorById(id,body){
        return this.authorRepository.upateAuthorById(id, body)
    }
 
    addNewAuthor(body){
        return  this.authorRepository.addNewAuthor(body)
    }
    delteAuthor(id){
        return this.authorRepository.delteAuthor(id)

    }
    getAllBooksbyauthor(id){
        return this.authorRepository.getAllBooksbyauthor(id)

    }
}


module.exports = AuthorService;