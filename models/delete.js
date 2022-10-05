const db = require("../util/database");

module.exports.delete = (body) => {
  return db.query(
    `delete from ${body.tableName} where id in (${body.values})`
  )
};
