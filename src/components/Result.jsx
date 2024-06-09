import React , {useState} from 'react'
import emojis from '../assets/emojis';

function Result(props) {
  return (
    <div id='result' className="w-96 mt-16 mb-10 p-5 text-center">
      <h1 id="element" className="text-7xl mb-8">
        {props.emoji}
      </h1>
      <h2 className="text-2xl font-semibold text-amber-500">{props.name}</h2>
      <p className='text-sm mt-2 text-gray-800'>{props.desc}</p>
    </div>
  );
}

export default Result
