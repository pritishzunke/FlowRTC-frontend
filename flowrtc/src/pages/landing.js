import { React, useEffect, useRef, useState } from "react";
import axios from "axios";

const Landing = ({ socket }) => {
  const [roomId, setRoomId] = useState(null); // To store the room name
  const [inputRoomId, setInputRoomId] = useState(""); // To store the room name
  const [inRoom, setInRoom] = useState(false);
  const peerConnection = useRef(null);
  const dataChannel = useRef(null);
  const [isConnected, setIsConnected] = useState(false);

  // Set up socket event listeners
  useEffect(() => {
    if (!socket) return;

    // Listen for a server message confirming room join
    socket.on("selfJoinRoom", (data) => {
      console.log(`Joined room: ${data}`);
      setInRoom(true);
    });

    socket.on("joinRoom", (data) => {
      console.log(`new user has joined: ${data}`);
    });

    socket.on("leaveRoom", (data) => {
      console.log(`Left room: ${data}`);
    });

    socket.on("sdpOffer", async (offer) => {
      console.log(`offer: ${offer}`);
      peerConnection.current = new RTCPeerConnection();
      const offerDesc = new RTCSessionDescription(offer);
      await peerConnection.current.setRemoteDescription(offerDesc);
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);

      peerConnection.current.onicecandidate = (event) => {
        if (event.candidate) {
          console.log("candicate", event.candidate);
          socket.emit("iceCandidates", {
            roomId: inputRoomId,
            candidate: event.candidate,
          });
        }
      };
      peerConnection.current.addEventListener(
        "connectionstatechange",
        (event) => {
          if (peerConnection.current.connectionState === "connected") {
            // Peers connected!
            console.log("WebRTC connection established");
            setIsConnected(true);
          } else {
            console.log("WebRTC connection disconnected");
            setIsConnected(false);
          }
        }
      );

      dataChannel.current = peerConnection.current.createDataChannel("chat");

      socket.emit("sdpAnswer", { roomId: inputRoomId, answer: answer });
    });

    socket.on("sdpAnswer", async (answer) => {
      console.log(`answer: ${answer}`);
      const answerDesc = new RTCSessionDescription(answer);
      await peerConnection.current.setRemoteDescription(answerDesc);
    });

    socket.on("iceCandidates", async (candidate) => {
      console.log(`ice candidates: ${candidate}`);
      const candidateObj = candidate;
      await peerConnection.current.addIceCandidate(candidateObj);
    });

    // Cleanup listeners on component unmount
    return () => {
      socket.off("joinRoom");
      socket.off("leaveRoom");
      socket.off("sdpOffer");
      socket.off("sdpAnswer");
      socket.off("iceCandidates");
    };
  }); // Rerun only if the `socket` prop changes

  const generateRoom = async () => {
    let response = await axios.get("http://localhost:8080/generateroomid");
    console.log(response.data);
    setRoomId(response.data.roomId);
  };

  const handleRoomJoin = () => {
    if (inputRoomId === "") {
      alert("You cannot join room without entering room id");
    } else {
      socket.emit("joinRoom", { roomId: inputRoomId });
    }
  };

  const handleInputUpdate = (e) => {
    setInputRoomId(e.target.value);
  };

  const handleCreateConnection = async () => {
    peerConnection.current = new RTCPeerConnection();
    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        console.log("candicate", event.candidate);
        socket.emit("iceCandidates", {
          roomId: inputRoomId,
          candidate: event.candidate,
        });
      }
    };

    peerConnection.current.addEventListener(
      "connectionstatechange",
      (event) => {
        if (peerConnection.current.connectionState === "connected") {
          // Peers connected!
          console.log("WebRTC connection established");
          setIsConnected(true);
        } else {
          console.log("WebRTC connection disconnected");
          setIsConnected(false);
        }
      }
    );

    dataChannel.current = peerConnection.current.createDataChannel("chat");

    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);
    socket.emit("sdpOffer", { roomId: inputRoomId, offer: offer });
  };

  if (!inRoom) {
    return (
      <div>
        <h1>Socket.IO Chat</h1>
        <button onClick={generateRoom}>Generate room id</button>
        <p>{roomId}</p>
        <br></br>
        <input
          type="text"
          value={inputRoomId}
          onChange={handleInputUpdate}
        ></input>
        <button onClick={handleRoomJoin}>Join room</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Room: {inputRoomId}</h1>
        <button onClick={handleCreateConnection}>Start Connection</button>
        <p>{isConnected ? "Connected" : "Not Connected"}</p>
      </div>
    );
  }
};

export default Landing;
