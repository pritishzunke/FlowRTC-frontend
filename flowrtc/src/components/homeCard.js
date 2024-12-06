import joinLogo from "../assets/joinLogo.png";
import homeCardMessages from "../constants/messages";

const HomeCards = (props) => {
  const messageHeading = homeCardMessages[props.type].heading;
  let messageContent = homeCardMessages[props.type].content;
  messageContent = (
    <ul className="space-y-4 font-mono">
      {messageContent.map((item, index) => (
        <li key={index}>
          <strong>{item.title}:</strong> {item.text}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="mx-10 my-5 flex flex-row rounded-2xl bg-neutral-800 hover:border-[2px] hover:border-blue-600">
      <img
        src={props.image}
        className="my-auto h-96 w-1/3 object-fill"
        alt={props.type}
      />
      <div className="m-5 flex w-2/3 flex-col rounded-xl bg-white p-5">
        {/* Heading and content */}
        <div className="mb-10 flex-grow font-mono">
          <h1 className="mb-7 text-2xl font-bold">{messageHeading}</h1>
          <p>{messageContent}</p>
        </div>
        {/* Room ID bar and button */}
        <div className="mt-auto flex flex-row items-center">
          <input
            placeholder="Enter Room ID"
            className="w-[90%] rounded-full border-2 border-gray-800 bg-neutral-800 p-2 text-center text-gray-400"
          />
          <button className="h-15 min-w-sm mx-2 flex max-w-sm items-center justify-center rounded-full px-2">
            <img
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-110"
              src={joinLogo}
              alt="Join Room"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
