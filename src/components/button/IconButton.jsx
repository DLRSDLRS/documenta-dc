import React from 'react'
import './button.css'

export default function IconButton () {
  return (
       <>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <button className="btn"><i className="fa fa-home"></i></button>
        <button className="btn"><i className="fa fa-bars"></i></button>
        <button className="btn"><i className="fa fa-trash"></i></button>
        <button className="btn"><i className="fa fa-close"></i></button>
        <button className="btn"><i className="fa fa-folder"></i></button>
        <br/>

        <p>Icon buttons with text:</p>

        <button className="btn"><i className="fa fa-home"></i> Home</button>
        <button className="btn"><i className="fa fa-bars"></i> Menu</button>
        <button className="btn"><i className="fa fa-trash"></i> Trash</button>
        <button className="btn"><i className="fa fa-close"></i> Close</button>
        <button className="btn"><i className="fa fa-folder"></i> Folder</button>
      </>
  )
}
