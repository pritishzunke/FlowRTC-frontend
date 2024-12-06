import videoImage from "../assets/Remote team-pana.svg";
import fileTransferImage from "../assets/Transfer files-amico.svg";
import GenerateRoom from "../components/generateRoomId";
import HomeCards from "../components/homeCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="container mx-auto p-4">
        <div className="p-10 font-doto text-3xl text-white md:text-6xl">
          FlowRTC
        </div>
        <div className="p-10 font-doto text-lg text-white">
          <h1 className="text-2xl">Welcome to FlowRTC</h1>
          <p>
            FlowRTC is an advanced, peer-to-peer (P2P) real-time communication
            platform designed to provide seamless video, voice, and file
            transfer capabilities. Built for simplicity and high performance,
            flowRTC empowers users to connect and share content instantly,
            without the need for central servers or third-party intermediaries.
          </p>
        </div>

        <GenerateRoom></GenerateRoom>

        <HomeCards image={fileTransferImage} type={"fileTransfer"}></HomeCards>
        <HomeCards image={videoImage} type={"videoCalling"}></HomeCards>
      </div>
    </div>
  );
};

export default Home;
