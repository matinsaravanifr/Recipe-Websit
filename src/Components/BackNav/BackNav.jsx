import React from "react";
import { useNavigate } from "react-router-dom";
export default function BackNav() {
  const navigate = useNavigate();
  const Backhandle = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="w-full h-10 bg-amber-300 flex items-center justify-center">
      <button
        onClick={Backhandle}
        className="w-[250px] h-[30px] cursor-pointer text-white font-bold rounded-2xl bg-amber-500"
      >
        Back
      </button>
    </div>
  );
}
