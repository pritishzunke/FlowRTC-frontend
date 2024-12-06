import joinLogo from "../assets/joinLogo.png";
import homeCardMessages from "../constants/messages";

const HomeCards = (props) => {
  const messageHeading = homeCardMessages[props.type].heading;
  let messageContent = homeCardMessages[props.type].content;

  return (
    <div className="mx-10 my-5 flex flex-col rounded-2xl bg-neutral-800 hover:border-[2px] hover:border-blue-600 sm:flex-row">
      {/* Image */}
      <img
        src={props.image}
        className="mx-auto my-5 h-auto max-h-64 w-full object-contain sm:my-auto sm:h-96 sm:w-1/3"
        alt={props.type}
      />

      {/* Content */}
      <div className="m-5 flex flex-col rounded-xl bg-white p-5 sm:w-2/3">
        {/* Heading */}
        <div className="mb-7 text-center sm:text-left">
          <h1 className="text-2xl font-bold">{messageHeading}</h1>
        </div>

        {/* Conditional Message Content */}
        <div className="mb-10 text-left font-mono">
          {messageContent.map((item, index) => (
            <div key={index} className="mb-3">
              <strong>{item.title}</strong>
              {/* Only show the full content for `lg` screens and above */}
              <p className="hidden lg:block">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Room ID bar and button */}
        <div className="mt-auto flex flex-col items-center space-y-4 sm:flex-row sm:items-center sm:justify-start sm:space-x-4 sm:space-y-0">
          <input
            placeholder="Enter Room ID"
            className="w-full rounded-full border-2 border-gray-800 bg-neutral-800 p-2 text-center font-mono text-gray-400 sm:w-[90%]"
          />
          <button className="h-15 mx-auto flex items-center justify-center rounded-full px-2 sm:mx-0">
            <img
              className="h-10 w-10 transform transition-transform duration-200 hover:scale-125"
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
