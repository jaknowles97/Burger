var connection = require("./connection.js");
var mysql = require("mysql");

var orm = {
  selectAll: function(whatToSelect) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [whatToSelect], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(tableInput, valOfCol) {
    var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
    connection.query(queryString, [tableInput, valOfCol], function(err, result) {
      if (err) throw err;
      console.log("rows added: "+ result.affectedRows);
    });
  },
  updateOne: function(whatTable, nameOfCol, valOfCol, idOfCol) {
    var queryString = "UPDATE ?? SET ?? = ? ";
    queryString += "WHERE id = ?";

    console.log(queryString)
    connection.query(queryString, [whatTable, nameOfCol, valOfCol, idOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;