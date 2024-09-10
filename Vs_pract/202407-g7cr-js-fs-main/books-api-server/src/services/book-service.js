class BookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  getAllBooks() {
    return this.bookRepository.getAllBooks();
  }

  addNewBook(body) {
    return this.bookRepository.addNewBook(body);
  }

  deleteBookById(id) {
    return this.bookRepository.deleteBookById(id);
  }

  getBookById(id){
    return this.bookRepository.getBookById(id)
  }

  updateBookById(id,body){
    return this.bookRepository.updateBookById(id,body)
  }

}

module.exports = BookService;
