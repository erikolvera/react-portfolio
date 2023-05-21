import React from 'react'

export default function card({name, description,link, github}) {
  return (
    <div>
        <h2>{name}</h2>
        <p style={{fontWeight:'bold'}}>{description}</p>
        <a href={link}>{link}</a>
        <a href={github}>{github}</a>

    </div>
  )
}
