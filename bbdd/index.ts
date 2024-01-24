import express from "express";
import cors from 'cors';
import RUser from './routes/user.routes';
import RRoom from "./routes/room.routes";

const app = express();

app.set('port', process.env.PORT || 4000);
const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

RUser(app);
RRoom(app);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});