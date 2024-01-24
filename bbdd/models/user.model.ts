import db from '../database';

const MUser = function(this: any, user: any) {
    this.userName = user.userName;
    this.socketId = user.socketId;
};

MUser.create = (newUser: any, result: any) => {
    db.query("INSERT INTO USER SET ?", newUser, (err:any, res:any) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, {
            ...newUser,
            userCode: res.insertId,
        });
    });
};

export default MUser;