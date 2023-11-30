import imgs from "../assest/imgs/kjn.jpg";
type Props = {};

export default function About({}: Props) {
  return (
    <>
      <div className="bg-gray-800 h-screen pt-32">
        <div>
          <h1 className="text-6xl p-24  text-white">
            About <span className="text-red-500">me</span>{" "}
          </h1>
          <p className="text-xl pl-24 mt-[-4rem] italic text-slate-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
            Odit labore a vitae. Repellat fugiat repudiandae aut, eaque <br />
            quod eum voluptatum accusamus minima quos, sint <br />
            magnam laudantium, dolorum eveniet laborum.
            <br />
          </p>
          <img
            className="w-[47%] ml-[42rem] mt-[-18rem] border-0 rounded-lg"
            src={imgs}
            alt="My image"
          />
        </div>
      </div>
    </>
  );
}
