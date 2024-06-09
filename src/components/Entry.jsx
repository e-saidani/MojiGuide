import React from 'react'

function Entry(props) {
  return (
    <div
      className="flex flex-nowrap gap-3 mt-8 align-middle justify-center flex-col w-3/12 p-5 text-center hover:scale-125 hover:rounded-3xl hover:bg-amber-100  bg-amber-50"
      id='entry'
      >
      <h1 className="text-7xl">{props.emoji}</h1>
      <h2 className="text-2xl text-amber-500 ">{props.name}</h2>
      <p className="text-black-700">{props.description}</p>
    </div>
  );
}

export default Entry
