const mongodb = require("mongodb").MongoClient
const MongoUrl =
  "mongodb+srv://@c101-onl3m.mongodb.net/c101?retryWrites=true&w=majority"

const databases = {}
async function getDb(dbName) {
  let db = databases[dbName]
  if (db == null) {
    const options = {}
    options.auth = { user: "c101", password: "<Password Here>" }
    options.authSource = "admin"
    options.useUnifiedTopology = true
    const client = await mongodb.connect(MongoUrl, options)
    console.log(`Created Mongo client for DB '${dbName}'`)
    db = client.db(dbName)
    databases[dbName] = db
  }
  return db
}

async function getDB() {
  const db = await getDb("c101")
  return db.collection("<Todo Database Name>")
}

module.exports = {
  getDB
}
