import img2 from "../assets/SVG/Scenes/communication _ chat, conversation, talk, text, message, messages, messaging, people.svg";

export default function Team() {
  return (
    <>
      <section id="us" className="bg-orange-50 md:flex md:flex-row">
        <img className="md:w-1/2 md:p-4 w-3/4 m-auto " src={img2} />
        <div className="text-center font-snas p-6 pb-0 box-border md:w-full flex flex-col justify-center items-center">
          <h2 className="text-sky-900 font-extrabold text-2xl capitalize ">
            <span className="text-orange-500">300+</span> talented people
          </h2>
          <p className="text-gray-500 p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="grid grid-cols-2 gap-y-8 px-10 md:my-10">
            <li className="flex flex-col justify-center items-center">
              <p className="text-orange-500 text-4xl">228</p>
              <p className="text-sky-900">developers</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <p className="text-orange-500 text-4xl">4</p>
              <p className="text-sky-900">architects</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <p className="text-orange-500 text-4xl">12</p>
              <p className="text-sky-900">project managers</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <p className="text-orange-500 text-4xl">30</p>
              <p className="text-sky-900">UI/Ux designers</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
