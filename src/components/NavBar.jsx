import React from 'react'

function NavBar() {
  return (
    <div id='nav' className="bg-white sticky top-0 flex justify-between border-b-2 border-zinc-300 w-full ml-0 p-3">
      <h2 className="text-orange-500 font-bold font-sans text-2xl ml-8">
        MojiGuide
      </h2>
      <button
        className="mr-2 p-1 bg-amber-600 text-white px-3 rounded-sm hover:shadow-md"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}>
        Home
      </button>
    </div>
  );
}

export default NavBar
