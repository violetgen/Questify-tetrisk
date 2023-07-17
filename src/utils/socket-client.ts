import { io } from "socket.io-client";

const socket = () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transport: ["websocket"],
    secure: true,
    rejectUnauthorized: false,
  };
  return io(
    "https://questify-backend-4698271b2f4b.herokuapp.com",
    // "https://skillbet-backend.herokuapp.com",
    // "http://192.168.127.99:3004",
    options
  );
};
export default socket;
