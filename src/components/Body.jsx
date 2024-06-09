import React from 'react'
import Result from './Result'
import Entry from './Entry'
import emojis from '../assets/emojis'

function Body() {
    function handleEntry(term) {
        return (
        <Entry
            key={term.key}
            emoji={term.emoji}
            name={term.name}
            description={term.description}
        />)
    }
  return (
    <div className='flex gap-10 flex-wrap justify-center mt-5'>
      {emojis.map(handleEntry)}
    </div>
  )
}

export default Body
