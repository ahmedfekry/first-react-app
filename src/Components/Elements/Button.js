import React from 'react'

export default function Button({title,children}) {
  if (!title || title === '') {
    return null
  }

  return (
    <div>
    { title === '' ? (<div></div> ): (
      <button className="btn btn-sm btn-primary mx-1 my-1">{title} {children}</button>
    ) }
    </div>
    
  )
}
