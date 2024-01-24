import mysql from 'mysql2';
import dbconfig from './dbconfig/config';

const pool = mysql.createPool({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB,
});

pool.getConnection((err, connection) => {
    if(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('DATABASE CONNECTION WAS CLOSED');
        }
        else if(err.code === 'ER_CON_COUNT_ERROR') {
        console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        else if(err.code === 'ECONNREFUSED') {
        console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if(connection) connection.release();
    console.log('DATABASE is connected!');
    return;
});

export default pool;