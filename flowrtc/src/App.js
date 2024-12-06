// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import Landing from "./pages/landing";

import Home from "./pages/home";
import { isMobile } from "react-device-detect";

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
  return (
    <div>
      {isMobile ? (
        <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
          <h1>Mobile Devices Not Supported</h1>
          <p>
            Please access this application on a desktop or laptop for the best
            experience.
          </p>
        </div>
      ) : (
        <div>
          <Home />
        </div>
      )}
    </div>
  );
};

export default App;
