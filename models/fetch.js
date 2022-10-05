const db = require("../util/database");

exports.fetch = (tableName) => {
  return db.query(
    `select ${tableName[0]}.id, ${tableName[0]}.name, phone_number, cnic_id, ${tableName[1]}.name as city, address, image_path
     from ${tableName[0]} join ${tableName[1]} on city_id = ${tableName[1]}.id`
  );
};
