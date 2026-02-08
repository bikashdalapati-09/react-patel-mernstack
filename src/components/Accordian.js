import React from "react";
import ListItem from "./ListItem";

function Accordian({ title, open, setOpen }) {
  const showItem = () => {
    setOpen(!open);
  };
  return (
    <div className="mt-3 shadow-md border border-gray-200 px-4 py-2 w-60 rounded-md">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <button
          className="bg-black text-white px-2 rounded-md cursor-pointer"
          onClick={showItem}
        >
          Show
        </button>
      </div>
      {open && <ListItem />}
    </div>
  );
}

export default Accordian;
