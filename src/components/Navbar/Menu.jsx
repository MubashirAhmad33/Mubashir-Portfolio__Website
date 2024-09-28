import React, { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="hidden md:block ">
      <div className=" ">
        <div onClick={() => setOpen((prev) => !prev)}>Menu</div>

        {open && (
          <ul className="text-white flex flex-col gap-4 absolute top-0 left-0  w-full items-center justify-center bg-red-500 h-screen z-10 lg:hidden">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
