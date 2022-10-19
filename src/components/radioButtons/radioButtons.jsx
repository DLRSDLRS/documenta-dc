import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function RadioButtons () {
  return (

    <div className="btn-group">
      <button type="button" className="btn btn-success">hover</button>
      <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">my</a></li>
        <li><a className="dropdown-item" href="#">dead</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">body</a></li>
      </ul>
    </div>

  )
}
