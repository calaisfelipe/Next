import "../globals.css";

export default function ExamplePage() {
  return (
    <div className="min-h-screen grid place-content-center">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-52 h-52 rounded-full shadow-2xl grid place-content-center">
        <div className="bg-gradient-to-l from-sky-500 to-indigo-500  w-36 h-36 rounded-full shadow-2xl grid place-content-center">
          <div className=" bg-gradient-to-t from-lime-200 to-emerald-600 w-24 h-24 rounded-full shadow-2xl grid place-content-center">
            <div className="radial-blue w-8 h-8 rounded-full shadow-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
