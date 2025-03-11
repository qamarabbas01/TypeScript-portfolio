import imgs from "../assest/imgs/images (1).jpeg";
type Props = {};

export default function Home({}: Props) {
  const fontfamily = "italic font-bold";
  return (
    <>
      <div className="pt-72 bg-gray-700 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className={`${fontfamily} text-5xl mb-4`}>
            Welcome to my portfolio, I'm John <br />
            <span className="text-red-400">Frontend Developer</span>
          </h1>
          <p className="text-lg mb-6">
            Hi there, I'm John, a Frontend Developer. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.
          </p>
          <button className="border-0 rounded-lg text-lg px-6 py-3 mb-6 bg-slate-600 hover:bg-slate-500">
            About Me
          </button>
        </div>
      </div>
    </>
  );
}
