const db = require("../util/database");

exports.insert = (body) => {
  return db.query(
    `insert into ${body.tableName} set ?`, body.values
  )
};
