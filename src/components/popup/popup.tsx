import React from 'react'
import { Message } from '../../models/message'

function PopUp({role, text}:Message) {
  return (
    <div className='w-1/4 flex flex-row items-start justify-left bg-slate-100 rounded-lg px-8 py-4 bg-opacity-90 text-lg font-semibold border-2 border-slate-300'>
        <p><span className='capitalize'>{role}</span> : {text}</p>
    </div>
  )
}

export default PopUp