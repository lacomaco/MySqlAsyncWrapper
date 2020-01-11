const mysql = require('mysql');
const getConfig = require('../../../db/config.json');

class  mysqlAsync  {
    constructor(){
        this.pool = mysql.createPool(getConfig);
    }

    connect= ()=>{
        return new Promise((resolve,reject)=>{
            this.pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{

                    resolve({
                        connected:(sql)=>{
                            return this.query(connection,sql);
                        },
                        release:()=>{
                          connection.release();
                        }
                    });
                }
            });
        });
    }

    query = (connection,sql) =>{
        return new Promise((resolve,reject)=>{
            connection.query(sql,(error,result,fields)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            });
        });
    }

}

module.exports = new mysqlAsync();
