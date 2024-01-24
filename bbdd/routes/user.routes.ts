import express from 'express';
import CUser from '../controllers/user.controller';

const RUser = (app:any) => {
    const user = CUser;
    const router = express.Router();

    router.post("/", user.create);
    
    app.use('/api/user', router);
}

export default RUser;
