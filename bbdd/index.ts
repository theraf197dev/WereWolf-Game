import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'werewolf',
});

con.connect(function(error: any){
    if(error){
        throw error;
    }
    else {
        console.log('Connected');
    }
});

con.end()