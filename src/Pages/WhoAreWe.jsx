import img from "../assets/SVG/Scenes/settings _ options, preferences, cogwheel, search, find, maintenance, error, fix.svg";
import check from "../assets/check-mark-circle-2-svgrepo-com.svg";
export default function WhoAreWe() {
  return (
    <>
      <section
        id="about"
        className="pt-10 relative md:flex md:flex-row-reverse"
      >
        <img className="w-3/4 m-auto md:w-1/2 md:p-4" src={img} />

        <div className=" font-snas p-6 pb-0 box-border md:w-full flex flex-col justify-center items-center">
          <h2 className="text-sky-900 text-center font-extrabold text-2xl capitalize ">
            Who are <span className="text-orange-500">we?</span>
          </h2>
          <p className="text-gray-500 p-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ul className="grid grid-cols-2 gap-y-5 gap-x-3 m-auto p-8 md:m-4 md:p-0">
            <li>
              <img className="w-6 inline" src={check} />
              <span className="text-gray-700 ml-2">Concept design</span>
            </li>
            <li>
              <img className="w-6 inline" src={check} />
              <span className="text-gray-700 ml-2">development</span>
            </li>
            <li>
              <img className="w-6 inline" src={check} />
              <span className="text-gray-700 ml-2">testing work</span>
            </li>
            <li>
              <img className="w-6 inline" src={check} />
              <span className="text-gray-700 ml-2">Concept design</span>
            </li>
          </ul>
        </div>
        <div className="custom-shape-divider-top-1675969972 absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="fill-orange-50"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="relative block w-[calc(107%+1.3px)] h-[73px]"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="relative block w-[calc(107%+1.3px)] h-[73px]"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="relative block w-[calc(107%+1.3px)] h-[73px]"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
