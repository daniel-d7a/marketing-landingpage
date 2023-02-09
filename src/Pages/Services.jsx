import Service_Card from "../atoms/Service-Card";
import img1 from "../assets/icons/icons8-marketing-64.png";

export default function Services() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

  const title = "Branding identity";
  return (
    <>
      <section id="service" className="bg-orange-50 pb-10">
        <div className="mt-10 text-center font-snas p-6 box-border">
          <h2 className="text-sky-900 font-extrabold text-2xl capitalize ">
            what <span className="text-orange-500">service</span> we are
            providing?
          </h2>
          <p className="text-gray-500">
            offer your bussiness with the best assisstance for growth
          </p>
        </div>
        <div className="m-4 flex-wrap box-border gap-8 flex flex-row justify-center items-center">
          <Service_Card img={img1} title={title} text={text} />
          <Service_Card img={img1} title={title} text={text} />
          <Service_Card img={img1} title={title} text={text} />
          <Service_Card img={img1} title={title} text={text} />
        </div>
      </section>
    </>
  );
}
