var { MongoClient } = require("mongodb");

var url =
  "mongodb+srv://Kiran_66:Kiran@atlascluster.i4zc8.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";

async function dbconnection(dbNam, collection) {
  var client = await MongoClient.connect(url);
  let dbC = client.db(dbNam); //db
  let collectionC = dbC.collection(collection); //collection
  return collectionC;
}

// function dbconnectionClose(req) {
//   return client.close();
// }

module.exports = { dbconnection };
