import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { TiEye } from "react-icons/ti";

function App() {
  const [type, setType] = useState("password");
  const [open, setOpen] = useState(<TiEye size={30} color={"black"} />);

  const handleToggle = () => {
    if (type === "password") {
      setOpen(<FaEyeSlash size={30} color={"black"} />);
      setType("text");
    } else {
      setOpen(<TiEye size={30} color={"black"} />);
      setType("password");
    }
  };

  return (
    <div className="max-w-[45rem] mx-auto h-screen flex justify-center items-center">
      <div className="flex justify-center items-center">
        <form className="flex justify-center items-center py-3 px-5 rounded-3xl bg-white border border-solid border-[#9e9e9e]">
          <input
            type={type}
            placeholder="Enter your password"
            className="bg-transparent text-lg font-medium"
          />
          <span onClick={handleToggle} className="pl-5">
            {open}
          </span>
        </form>
      </div>
    </div>
  );
}

export default App;
