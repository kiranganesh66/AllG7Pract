let express = require("express");
//let configureAuthorRoutes = require('./routes/author-routes');

// Use bodyParser middleware to parse JSON bodies

const authorRoute = require("./routes/author-routes");
const bookRoute  = require("./routes/book-routes")

async function createApp() {
  let app = express();

  app.use(express.json());
 
  app.use("/api/authors", authorRoute); //add author route to the app.
  app.use("/api/books",bookRoute); //add book route


  // app.use((request,response,next)=>{
  //     console.log(`recevied request: ${request.method} ${request.path}`)
  //     return next(); //call next middlware.
  // });

  //configureAuthorRoutes(app); //add author routes to the app.
  //app.return404Error();

  return app;
}

module.exports = createApp;
