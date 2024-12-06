// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import Landing from "./pages/landing";

import Home from "./pages/home";

// import Home from "./pages/home";
const App = () => {
  // const [socket, setSocket] = useState();
  // // Connect to the Socket.IO server
  // useEffect(() => {
  //   const socket = io("http://localhost:8080"); // Replace with your server URL
  //   // Clean up on component unmount
  //   setSocket(socket);
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);
  // // return <Landing socket={socket} />;

  return <Home />;
};

export default App;
