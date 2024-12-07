import man1Image from "../assets/man1.png";
import man2Image from "../assets/man2.png";

const FileTransferRoom = () => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-900 p-4">
      <div className="mx-10 p-5 font-doto text-3xl text-white md:text-6xl">
        File Transfer
      </div>
      <div className="flex flex-wrap items-center">
        <div className="ml-10 p-5 font-doto text-xl text-white md:text-3xl">
          Room Details: fgghvjbNLM
        </div>
        <button className="duration-400 ml-14 h-10 rounded-full bg-red-900 p-5 px-6 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-red-600 hover:shadow-xl active:scale-110 md:ml-0">
          Leave Room
        </button>
      </div>

      <div className="m-10 flex flex-grow flex-col items-center justify-center gap-4 rounded-2xl bg-neutral-800 p-4">
        {/* Image Container */}
        <div className="flex w-full flex-col items-center gap-4 text-white md:w-1/2 md:flex-row md:justify-between">
          <div className="flex flex-col">
            <img src={man1Image} alt="man1" className="max-h-44" />
            <p className="p-2 text-center font-doto text-white">Connected</p>
          </div>
          <div className="flex flex-col">
            <img src={man2Image} alt="man2" className="max-h-44 grayscale" />
            <p className="p-2 text-center font-doto text-white">
              connecting...
            </p>
          </div>
        </div>
        {/* Status Bar */}
        <div className="status-bar mt-5 h-2 w-full rounded-xl bg-white text-center md:w-1/2"></div>
      </div>
    </div>
  );
};

export default FileTransferRoom;
