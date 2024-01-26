import db from '../database';

const MRoom = function(this: any, room: any) {
    this.roomName = room.roomName;
};

MRoom.create = (newRoom: any, result: any) => {
    db.query("INSERT INTO ROOM SET ?", newRoom, (err:any, res:any) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
        result(null, {roomCode: res.insertId});
    });
};

export default MRoom;