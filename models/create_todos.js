const query      = require('./query');

// create database & table
const dbName='schedule';
const tbName='todos';
//
queries()
//
async function queries(){
  //drop database
  try{
    // await query(`DROP DATABASE IF EXISTS ${dbName}`)
  //create databses "eStore"
    await query(`CREATE DATABASE IF NOT EXISTS ${dbName}`)
    await query(`USE ${dbName}`)
    await query(`DROP TABLE IF EXISTS ${tbName}`)
  //create table "notice"
    await query(`
      CREATE TABLE ${tbName}(
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        todo VARCHAR(255) NOT NULL,
        status BOOLEAN NOT NULL DEFAULT false,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `)
  }catch(err){
    console.log(err)
    throw err
  }
  // for(let i=0;i<data.length;i++){
  //   await query(`
  //     INSERT INTO ${tbName}
  //     (name, regDate) VALUES
  //     ("${data[i].name}", NOW())
  //   `)
  // }
  //db.end()
}
