import React from "react";

export default function Spinner() {
  return (
    <div className="w-full h-screen flex items-center justify-center">

    <span className="w-12 h-12 border-4 border-amber-400 border-b-transparent rounded-full inline-block animate-spin"></span>
    </div>
  );
}
