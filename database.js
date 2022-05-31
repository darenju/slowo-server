const sqlite3 = require('sqlite3');

function getDb() {
  return new sqlite3.Database('db.sqlite');
}

module.exports = {
  newSubscription: function(subscription) {
    const db = getDb();
    db.run('INSERT INTO users_subscriptions VALUES (?)', [
      JSON.stringify(subscription),
    ], function(error) {
      console.log(error);
    });
    db.close();
  },
};
