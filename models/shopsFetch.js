const db = require("../util/database");

exports.fetch = (tableName) => {
  return db.query(
    `select ${tableName[0]}.id, ${tableName[0]}.name, ${tableName[1]}.name as city, 
    address, plumber_id, sub_dealer_id, dealer_id
     from ${tableName[0]} join ${tableName[1]} on city_id = ${tableName[1]}.id`
  );
};
