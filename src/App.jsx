import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserMenu from "./components/UserMenu";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex bg-gray-100 relative dark:bg-[#111827]">
      {/* left side navbar  */}
      <div
        className={`lg:w-2/12 md:w-3/12 lg:ml-0 ${
          show ? "ml-0" : "-ml-[1000px]"
        } absolute lg:relative h-[100vh]`}
      >
        <button onClick={handleShow} className="text-4xl absolute">
          X
        </button>
        <Navbar></Navbar>
      </div>

      <div className="lg:w-10/12 w-full">
        {/* top navbar  */}
        <div className=" w-full h-20 bg-white border-b border-gray-300 dark:border-gray-600 dark:bg-[#111827] block">
          <UserMenu></UserMenu>
          <button onClick={handleShow} className="text-4xl ">
            X
          </button>
        </div>

        {/* outlet  */}
        <div className="p-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
