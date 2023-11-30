import imgs from "../assest/imgs/Contact.jpg";
type Props = {};

export default function Contact({}: Props) {
  return (
    <div>
      <div className="bg-gray-700">
        <h1 className="pt-20 pl-12 text-5xl italic text-black">
          Contacts us for <br /> build a new project
        </h1>
      </div>
      <div className=" pl-12 pt-12 pb-32 bg-gray-700">
        <div className="border-2 rounded-lg p-4 w-[40%]">
          <input
            className="p-2 w-96   border-0 rounded-sm "
            type="text"
            placeholder="Name"
          />{" "}
          <br />
          <br />
          <input
            className="p-2 w-96  border-0 rounded-sm "
            type="text"
            placeholder="Email"
          />
          <br />
          <br />
          <input
            className="p-2 w-96  border-0 rounded-sm "
            type="number"
            placeholder="Phone"
          />
          <br /> <br />
          <input
            className="h-24 w-96 border-0 rounded-sm ]"
            type="text"
            placeholder="Message"
          />
          <br />
          <br />
          <input
            className="p-2 border-0 rounded-lg  bg-orange-500  hover:bg-red-400"
            type="Submit"
          />
        </div>
        <div className="w-[40%] ml-[45rem] mt-[-32rem] border rounded-lg">
          <img src={imgs} alt="Contact us" />
        </div>
      </div>
    </div>
  );
}
