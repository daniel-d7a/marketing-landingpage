export default function Newsletter() {
  return (
    <>
      <section id="news">
        <div className="mt-10 text-center font-snas p-6 box-border">
          <h2 className="text-sky-900 font-extrabold text-2xl capitalize ">
            join our latest <span className="text-orange-500">newsletter</span>
          </h2>
          <p className="text-gray-500">
            offer your bussiness with the best assisstance for growth
          </p>
        </div>
        <form className=" flex justify-center mb-10">
          <input
            className="rounded-l-3xl w-3/4 my-10 ml-10 px-6 py-2 shadow-lg bg-white"
            type="email"
            placeholder="Your E-mail..."
          />
          <button className="bg-orange-500 px-6 py-2 mr-10 my-10 shadow-lg rounded-r-3xl">
            submit
          </button>
        </form>
      </section>
    </>
  );
}
