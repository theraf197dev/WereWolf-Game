import express from 'express';
import CRoom from '../controllers/room.controller';

const RRoom = (app:any) => {
    const room = CRoom;
    const router = express.Router();

    router.post("/", room.create);
    
    app.use('/api/room', router);
}

export default RRoom;
