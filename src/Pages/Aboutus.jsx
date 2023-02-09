import { useRef } from "react";
import img1 from "../assets/SVG/Scenes/business, statistics _ presentation, project, chart, graph, performance, analytics, man, people.svg";

export default function About() {
  const carousel = useRef(null);

  function scrollImageIntoView(index) {
    console.log(index);
    const img = carousel.current.querySelectorAll(":scope > div")[index];
    img.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <section
        id="home"
        ref={carousel}
        className="w-full md:h-[50vh] pt-10 flex md:overflow-x-hidden overflow-auto snap-x"
      >
        <div className="p-6 flex-shrink-0 w-[100vw] snap-start md:flex md:flex-row-reverse justify-center items-center md:px-10">
          <img src={img1} className="w-2/3 m-auto md:w-1/3" />
          <div className="md:pr-4">
            <h2 className="text-sky-900 font-extrabold text-3xl capitalize">
              Better <span className="text-orange-500">marketing</span> promotes
              sales and profits
            </h2>
            <p className="text-gray-500 text-xs mt-3">
              there are many variations of passages of lorem ipsum available but
              the majority have suffered alterations
            </p>
            <button className="bg-orange-500 px-8 py-2 mt-4 rounded">
              Read More
            </button>
          </div>
        </div>
        <div className="p-6 flex-shrink-0 w-[100vw] snap-start md:flex md:flex-row-reverse justify-center items-center md:px-10">
          <img src={img1} className="w-2/3 m-auto md:w-1/3" />
          <div className="md:pr-4">
            <h2 className="text-sky-900 font-extrabold text-3xl capitalize">
              Better <span className="text-orange-500">marketing</span> promotes
              sales and profits
            </h2>
            <p className="text-gray-500 text-xs mt-3">
              there are many variations of passages of lorem ipsum available but
              the majority have suffered alterations
            </p>
            <button className="bg-orange-500 px-8 py-2 mt-4 rounded">
              Read More
            </button>
          </div>
        </div>
        <div className="p-6 flex-shrink-0 w-[100vw] snap-start md:flex md:flex-row-reverse justify-center items-center md:px-10">
          <img src={img1} className="w-2/3 m-auto md:w-1/3" />
          <div className="md:pr-4">
            <h2 className="text-sky-900 font-extrabold text-3xl capitalize">
              Better <span className="text-orange-500">marketing</span> promotes
              sales and profits
            </h2>
            <p className="text-gray-500 text-xs mt-3">
              there are many variations of passages of lorem ipsum available but
              the majority have suffered alterations
            </p>
            <button className="bg-orange-500 px-8 py-2 mt-4 rounded">
              Read More
            </button>
          </div>
        </div>
      </section>
      <div className="flex gap-3 justify-center items-center mt-3">
        <div
          className="w-3 h-3 rounded-full bg-orange-500"
          onClick={() => {
            scrollImageIntoView(0);
          }}
        ></div>
        <div
          className="w-3 h-3 rounded-full bg-orange-500"
          onClick={() => {
            scrollImageIntoView(1);
          }}
        ></div>
        <div
          className="w-3 h-3 rounded-full bg-orange-500"
          onClick={() => {
            scrollImageIntoView(2);
          }}
        ></div>
      </div>
    </>
  );
}
