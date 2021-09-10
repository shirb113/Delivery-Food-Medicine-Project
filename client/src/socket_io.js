import { v4 as uuidv4 } from 'uuid';
var io = require('socket.io-client')
const ENDPOINT = 'http://127.0.0.1:9000'
export const socket = io(ENDPOINT, { autoConnect: false });
// socket.onAny((event, ...args) => {
//     console.log(event, args)
// })
socket.on('connect', function (socket) {
    console.log('Connected CLIENT!');
})
socket.on("users", (users) => {
    console.log(socket.auth)
    //     users.forEach((user) => {
    //         user.self = user.userID === socket.id;
    //         //   initReactiveProperties(user);
    //     });
    //     // put the current user first, and then sort by username
    //     // this.users = users.sort((a, b) => {
    //     //   if (a.self) return -1;
    //     //   if (b.self) return 1;
    //     //   if (a.username < b.username) return -1;
    //     //   return a.username > b.username ? 1 : 0;
    //     // });
});


export const connectToSocketIo = () => {
    const username = window.name
    socket.auth = { username }
    socket.connect();
}


export const onSendMessage = ({ from, to, msg, date = new Date(), uId = uuidv4(), handler }) => {
    socket.emit("private_message", { from, to, msg, date, uId });
    console.log("private_message", from, to, msg, date, uId);
    handler?.({ from, msg, date, to, uId })
}
//send to db (:?)
export const serverDeleteChatAlert = () => {
    socket.emit("delete_msg", {});
}
export const sendGeneralMessage = (msg) => {
    socket.emit("private_message", { from: 'צוות יד לחבר', to: '*', msg, date: new Date(), uId: uuidv4() });

}



// export const onGetMessage = ({ handler }) => {
//     // socket.on("private message", ({ from, message, date, to }) => {
//     //     handler?.({ from, message, date, to })
//     //     console.log('update', from, message, date, to)
//     // });
//     socket.on("private message", ({ from, message, date, to }) => {
//         handler?.({ from, message, date, to })
//         //     console.log('update', from, message, date, to)
//         // for (let i = 0; i < this.users.length; i++) {
//         //   const user = this.users[i];
//         //   if (user.userID === from) {
//         //     user.messages.push({
//         //       content,
//         //       fromSelf: false,
//         //     });
//         //     if (user !== this.selectedUser) {
//         //       user.hasNewMessages = true;
//         //     }
//         //     break;
//         //   }
//         // }
//     });

// }
// var socket = io.connect(ENDPOINT);
