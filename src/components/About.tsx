import imgs from "../assest/imgs/images.jpeg";
export default function About() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl text-white mb-8">
            About <span className="text-red-500">me</span>
          </h1>
          <p className="text-xl text-slate-400 italic mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit labore a vitae. 
            Repellat fugiat repudiandae aut, eaque quod eum voluptatum accusamus minima quos, 
            sint magnam laudantium, dolorum eveniet laborum.
          </p>
          <img
            className="w-full md:w-1/2 mx-auto border-0 rounded-lg shadow-lg"
            src={imgs}
            alt="Portrait of me"
          />
        </div>
      </div>
    </>
  );
}