// @ts-ignore
import emptyPlate from "../public/imgs/emptyPlate.jpg";

export default function PageNotFound() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${emptyPlate})` }}
    >
      <div className="text-center text-darkest-text-color justify-self-center self-center">
        <h1 className="font-bold text-7xl  capitalize text-center ">Oops!</h1>
        <h4 className="font-medium text-4xl  capitalize italic text-center ">
          This page is not available
        </h4>
        <h3 className="text-2xl mt-2 mb-4 text-white">
          the page you are looking for could not be found
        </h3>
        <a
          href="/"
          className="text-white border-2 border-white rounded-2xl p-2"
        >
          Home page
        </a>
      </div>
    </div>
  );
}
