import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ButtonToolbar () {
  return (

    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div className="btn-group me-2" role="group" aria-label="First group">
      <button type="button" className="btn btn-primary">1</button>
      <button type="button" className="btn btn-primary">2</button>
      <button type="button" className="btn btn-primary">3</button>
      <button type="button" className="btn btn-primary">4</button>
    </div>
    <div className="btn-group me-2" role="group" aria-label="Second group">
      <button type="button" className="btn btn-secondary">5</button>
      <button type="button" className="btn btn-secondary">6</button>
      <button type="button" className="btn btn-secondary">7</button>
    </div>
    <div className="btn-group" role="group" aria-label="Third group">
      <button type="button" className="btn btn-info">8</button>
    </div>
  </div>

  )
}
