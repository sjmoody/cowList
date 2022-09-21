// TODO: connect to MySQL database
const mysql = require('mysql2');

const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'cows'
});

connection.connect(function(err) {
  if (err) {
    console.error(`error connection: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
})

const getAll = function(){
  console.log("accessing getAll in db")
  let sqlString = 'SELECT * FROM `Cows`';
  return connection.promise().query(sqlString)
  .then( ([rows, fields]) => {
    console.log(`Rows returned from getAll: ${rows}`)
    let cows = JSON.stringify(rows);
    // connection.release() this somehow destroys the cows obj
    // connection.end(function(err){console.log(`Error trying to end db connection`)});
    return cows
  })

}

const getOneById = function(cowId) {
  console.log(`Attempting to fetch cow with id ${cowId}`)
  let sqlString = 'Select * FROM Cows WHERE `id` = ?'
  return connection.promise().query(sqlString, cowId)
  .then(result => result)
}

const createOne = function(cow) {
  console.log(`creating cow in db. Name: ${cow.name}; Description: ${cow.description}`)
  let sqlString = 'Insert into Cows SET ?'
  return connection.promise().query(sqlString, cow)
  .then( ([rows, fields]) => {
    console.log(`Cow attempt insert into db. Result:`);
    console.log(rows)
    // result looks like [{"fieldCount":0,"affectedRows":1,"insertId":7,"info":"","serverStatus":2,"warningStatus":0},null]
    if(!rows["insertId"]){
      throw rows;
    }
    return getOneById(rows["insertId"])
  })
  .then(([rows, fields]) => {
    console.log(`Retrieved cow: `)
    console.log(rows)
    return rows;
  })

}


module.exports.getAll = getAll;
module.exports.createOne = createOne;