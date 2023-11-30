// import imgs from "../assest/imgs/2.jpg";
// import imgs from "../assest/imgs/images.jpeg";
import imgs from "../assest/imgs/images (1).jpeg";
type Props = {};

export default function Home({}: Props) {
  const fontfamily = "italic , bold";
  return (
    <>
      <div className="pt-72 bg-gray-700">
        <div className={`${fontfamily} text-4xl ml-12 text-gray-900} `}>
          <h1>
            Welcome to my portfolio I'm john <br />
            <span className="text-red-400">Frontend devloper</span>
          </h1>
          <div>
            <p className="text-lg mt-2">
              Hi there i'm john a Frontend devloper lorem <br /> ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
            <button className="border-0 rounded-lg text-lg p-3 mb-2 bg-slate-600 hover:bg-slate-500">
              About me
            </button>
            <img
              className=" ml-[48rem] mt-[-20rem]  border-0 rounded-lg w-[30%] "
              src={imgs}
              alt="Hero1.jpg"
            />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
