import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="grid h-screen px-4 place-content-center bg-gray-900">
      <div className="text-center">
        <h1 className="font-black text-9xl text-gray-700">404</h1>

        <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Oops!
        </p>

        <p className="mt-4 text-gray-400">
          Llegaste a una página no existente. 😢
        </p>

        <button
          type="button"
          className="transition duration-300 px-5 py-3 mt-6 text-md font-medium text-black rounded bg-emerald-500 hover:bg-indigo-500"
          onClick={() => navigate("/home")}
        >
          Ir a home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
