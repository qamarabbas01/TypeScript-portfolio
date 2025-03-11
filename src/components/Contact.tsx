import imgs from "../assest/imgs/Contact.jpg";
type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="bg-gray-700 min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-5xl italic text-white mb-8 text-center">
        Contact us to <br /> build a new project
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="border-2 rounded-lg p-8 bg-white shadow-lg w-full md:w-1/2">
          <input
            className="p-2 w-full mb-4 border rounded-sm"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-2 w-full mb-4 border rounded-sm"
            type="text"
            placeholder="Email"
          />
          <input
            className="p-2 w-full mb-4 border rounded-sm"
            placeholder="Phone"
          />
          <textarea
            className="p-2 w-full mb-4 border rounded-sm h-24"
            placeholder="Message"
          />
          <button className="p-2 w-full border-0 rounded-lg bg-orange-500 hover:bg-red-400 text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
