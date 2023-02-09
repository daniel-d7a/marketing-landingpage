import logo from "../assets/gradient-mm-logo-design/Asset 4.svg";
import NavLink from "../atoms/NavLink";

export default function Footer() {
  const links = ["home", "about", "services"];

  return (
    <>
      <footer className="rounded-t-3xl bg-orange-100">
        <img src={logo} className="w-24 mx-auto py-10" />
        <p className="text-gray-500 text-center m-4">
          offer your bussiness with the best assisstance for growth
        </p>

        {
          //TODO: add navigation
        }

        <p className="text-gray-500 text-center pb-20">
          made with ❤ by{" "}
          <a className="underline" href="https://github.com/daniel-d7a">
            Eyad Alsherif
          </a>
        </p>
      </footer>
    </>
  );
}
