import MRoom from "../models/room.model";    

const CRoom = {
    create(req:any, res:any) {
        if(!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
              });
        }
        
        const room = {
            roomName: req.body.roomName,
        };
        
        MRoom.create(room, (err:any, data:any) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the comment."
              });
            else res.send(data);
          });
    }
};

export default CRoom;