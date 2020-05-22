import React, { useState } from 'react'

export default () => {
  const [name, setName] = useState('')

  return (
    <div className="page">
      <h1>To whom am I speaking?</h1>
      <div className="title">Time for Greetings</div>
      <div className="subtitle">Heres a greeting friend!</div>
      <input type="text" name="search" onChange={(event) => { setName(event.target.value) }} value={name} />
      <div className="message">{name ? `Greetings ${name}!` : null}</div>
      <button type="button" onClick={() => { setName('') }}>Clear</button>
    </div>
  )
}
