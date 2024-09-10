use("g7");

let books = db.getCollection("Books");
let author = db.getCollection("authors");

function uniqueAuthors() {
  return books.aggregate([
    {
      $project: {
        author: 1,
        id: 1,
        price: 1,
        rating: 1,
        reviews: { $size: "$reviews" },
      },
    },
    {
      $group: {
        _id: "$author",
        booksWritten: { $sum: 1 },
        avgPrice: { $avg: "$price" },
        avgRating: { $avg: "$rating" },
        numberOfvotes: { $sum: "$reviews" },
      },
    },
  ]);
}

uniqueAuthors();

function booksndAu() {
  books.aggregate([
    {
      $lookup: {
        from: "authors",
        localField: "id",
        foreignField: "authorid",
        as: result,
      },
    },
  ]);
}

booksndAu();
