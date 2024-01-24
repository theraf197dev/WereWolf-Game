import MUser from "../models/user.model";    

const CUser = {
    create(req:any, res:any) {
        if(!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
              });
        }

        const user = {
            userName: req.body.userName,
            socketId: req.body.socketId,
        };
        
        MUser.create(user, (err:any, data:any) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the comment."
              });
            else res.send(data);
          });
    }
};

export default CUser;