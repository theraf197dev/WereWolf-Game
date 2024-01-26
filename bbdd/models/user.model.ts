import db from '../database';

const MUser = function(this: any, user: any) {
    this.userName = user.userName;
    this.socketId = user.socketId;
    this.creator = user.creator;
    this.roomCode = user.roomCode;
};

MUser.create = (newUser: any, result: any) => {
    console.log(`INSERT INTO USER SET ${newUser}`)
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