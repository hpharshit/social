import mysql from "mysql"


// createConnection not working
export const db = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"983867",
  database:"social"
})