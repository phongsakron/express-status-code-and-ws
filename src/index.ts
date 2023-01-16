import express from "express";
import cors from "./middlewares/cors";
import {errorConverter, errorHandler} from "./middlewares/errors";
import router from "./routes/index.route";
import ws from "ws";

const app = express();
const wsServer = new ws.Server({
    port: 443
});

// app.use(rateLimit);
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1", router);

app.use(errorConverter);
app.use(errorHandler);


const server = app.listen(3000, () => {
    console.log("Server started on port 3000");
});
server.on(("close"), () => {
    console.log("Server closed");
});
server.on("error", (err) => {
    console.log(err);
});

server.on("clientError", (err, socket) => {
    console.log(err);
    socket.end("HTTP/1.1 400 Bad Request\r \n\r \n");
});


wsServer.once('listening', () => {
    console.log('Websocket Server started on port 443');
});

wsServer.on('connection', (ws: WebSocket) => {

    ws.onopen = () => {
        console.log('connected');
    }

    ws.onmessage = (message: MessageEvent) => {
        ws.send(message.data);
    }
});
