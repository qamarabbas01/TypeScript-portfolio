type Props = {};

export default function Navbar({}: Props) {
  const flexBetween = "flex items-center justify-between";
  const hover = "hover:text-slate-300";
  const fontfamily = "italic , bold";

  return (
    <>
      <div>
        <div className={`${flexBetween} fixed  z-30 w-full py-6 bg-slate-400`}>
          <h1
            className={`${flexBetween} ${fontfamily} text-2xl text-slate-900 ml-12 `}
          >
            Personal <span className="text-red-500 pl-2">Logo</span>
          </h1>
          <div className={` ${fontfamily} ml-12 text-lg flex gap-6 `}>
            <a className={`${hover}`} href="home">
              Home
            </a>
            <a className={`${hover}`} href="about us">
              About us
            </a>
            <a className={`${hover}`} href="contact us">
              Contact us
            </a>
          </div>
          <div className="mr-12 text-lg border-0 rounded-sm text-center">
            <button className="mr-12 bg-slate-600 w-full p-2 font-sans hover:bg-slate-300">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
