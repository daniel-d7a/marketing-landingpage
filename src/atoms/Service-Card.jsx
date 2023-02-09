export default function Service_Card({ img, title, text }) {
  return (
    <>
      <div className="shadow-lg bg-white p-2 w-2/5 md:w-1/5 box-border  text-center md:hover:shadow-2xl md:hover:scale-110 transition-all">
        <img className="mx-auto my-4" src={img} />
        <h4 className="text-sky-900 font-extrabold my-4">{title}</h4>
        <p className="text-gray-700">{text}</p>
      </div>
    </>
  );
}
