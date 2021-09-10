const mongo = require("mongoose");
const apiKeys = require("../api-keys-server")
mongo.set('useFindAndModify', false);
let URI = apiKeys.mongoDB;

console.log(URI)
let db = mongo.createConnection();
(async () => {
    try {
        await db.openUri(URI);
    } catch (err) {
        console.log("Error connecting to DB: " + err);
    }
})();
console.log('Pending DB connection');

require("./users")(db);
require("./packages")(db);
require("./rightPosts")(db);
require("./leftPosts")(db);
require("./chatMsg")(db);
require("./workSchedule")(db);

module.exports = model => db.model(model);


