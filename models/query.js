//????require('dotenv').config()
const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1004',
  database : 'schedule'
});
db.connect((err)=>{
  if(err) throw err;
  console.log("Mysql connected...")
})
const query=function(sql,params){
  return new Promise((resolve,reject)=>{
    db.query(sql,params,(err,result)=>{
      //console.log(err)
      if(err) {
        reject(err)
      }else{
        resolve(result)
      }
    });
  })
}
//db.end()
module.exports=query;